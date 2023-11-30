import { FC, useRef, useState } from 'react';
import { Flex, Heading, P, Span } from '@/components/basic';
import { Textarea } from '@/components/custom';
import { Modal, Upload, notification } from 'antd';
import { CustomButton, UploadButtonWrapper, UploadWrapper } from './style';
import Image from '@/components/basic/img';
import { useSelector } from 'react-redux';
import { savePost, uploadImage } from '@/actions/post';

interface PostModalType {
    visible: boolean,
    onChange: (value: any) => void
}

const PostModal: FC<PostModalType> = ({ visible, onChange }) => {
    const { user } = useSelector((state: any) => state.auth);
    const [code, setCode] = useState('');
    const [preview, setPreview] = useState<string | ArrayBuffer | null>('');
    const [file, setFile] = useState<any>(null);

    const onFileSelect = (data: any) => {
        if (data.file instanceof Blob) {
            const reader = new FileReader();
            reader.readAsDataURL(data.file);
    
            reader.onload = () => setPreview(reader.result);
        }
    }

    const beforeUpload = async (file: any, list: any) => {
        setFile(file);
        return false;
    }

    const onSave = () => {
        const match: any = code.match(/\/(\d+)/);
        if (!match) {
            notification.warning({ message: 'Warning', description: 'Please input the correct code.' });
            return;
        }
        if (!file) {
            notification.warning({ message: 'Warning', description: 'Please select gif file' });
            return;
        }
        Modal.confirm({
            title: 'Are you sure ?',
            content: 'Do you want to save this code ?',
            async onOk() {
                const result: any = await savePost({ id: user.id, track_id: match[1], code });
                if (result.success) {
                    notification.success({ message: 'Success', description: 'Created successfully' });
                    const form = new FormData;
                    form.append('id', result.model._id);
                    form.append('file', file);
                    const upload_result = await uploadImage(form);
                    if (upload_result.success) {
                        notification.success({ message: 'Success', description: 'Uploaded successfully' });
                        onChange(false);
                    }
                }
            }
        })
    }

    return (
        <Modal open={visible} onCancel={() => { setCode(''); setPreview(''); onChange(false)}} footer={null} className='custom-modal'>
            <Flex $style={{
                fDirection: 'column',
                gap: '2rem',
                p: '2rem 1rem',
                queries: {
                    480: {
                        p: '1rem 0'
                    }
                }
            }}>
                <Heading level={3} $style={{ align: 'center' }}>Add A Track To Your Profile</Heading>
                <Flex $style={{
                    fDirection: 'column',
                    gap: '1rem'
                }}>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <P $style={{ size: '0.75rem' }}>Paste Your SoundCloud Embed Code Here</P>
                        <Textarea value={code} onChange={(e: any) => setCode(e.target.value)} name='code' placeholder='Embeded Code' />
                    </Flex>
                    <Upload onChange={onFileSelect} beforeUpload={beforeUpload} showUploadList={false} className='custom-upload'>
                        <UploadWrapper>
                            {!preview ? (
                                <UploadButtonWrapper>
                                    <P $style={{ size: '1rem', align: 'center', color: 'white' }}>GIF</P>
                                </UploadButtonWrapper>
                            ) : (
                                <Image src={`${preview}`} alt='' $style={{ w: '100%', h: '100%' }} />
                            )}
                        </UploadWrapper>
                    </Upload>
                    <Flex $style={{
                        hAlign: 'flex-end',
                        w: '100%'
                    }}>
                        <CustomButton onClick={() => onSave()}>Save</CustomButton>
                    </Flex>
                </Flex>
            </Flex>
        </Modal>
    )
}

export default PostModal;