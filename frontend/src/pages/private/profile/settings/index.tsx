import { FC, useState } from 'react';
import { Flex, P, Span } from '@/components/basic'
import Image from '@/components/basic/img'
import { Input, Textarea } from '@/components/custom';
import { CustomButton, DeleteButton, ProfileInfo, SubmitButton, UploadButton } from './style';
import { GV } from '@/utils/style.util';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Upload, notification } from 'antd';
import { updateProfile, uploadImage } from '@/actions/profile';
import { authActions } from '@/redux/auth';
import { UPLOAD_URI } from '@/config';

interface SettingsType {
  modalPropsChange: (value: any) => void;
}

interface FormDataType {
  username: string,
  displayName: string,
  url: string,
  bio: string
}

const Settings: FC<SettingsType> = ({ modalPropsChange }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const [formData, setFormData] = useState<FormDataType>({
    username: user ? user.username : '',
    displayName: user ? user.displayName : '',
    url: user ? user.url : '',
    bio: user ? user.bio : ''
  });
  const [avatar, setAvatar] = useState<string | ArrayBuffer | null>(user ? (UPLOAD_URI + user.avatar) : '');
  const [cover, setCover] = useState<string | ArrayBuffer | null>(user ? (UPLOAD_URI + user.cover) : '');

  const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (file: any, flag: number) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (flag === 1)
        setAvatar(reader.result);
      else
        setCover(reader.result);
    }
  }

  const beforeUpload = async (file: any, fileList: any[], flag: number) => {
    const form = new FormData;
    form.append('file', file);
    form.append('id', user.id);
    form.append('flag', `${flag}`);
    const result = await uploadImage(form);
    if (result.success) {
      localStorage.setItem('token', result.accessToken);
      notification.success({ message: 'Success', description: 'Uploaded successfully' });
      dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
    }

    return false;
  }

  const onSubmit = (e: any) => {
    e.preventDefault();

    Modal.confirm({
      title: 'Are you sure ?',
      content: 'Do you want to save this data ?',
      async onOk() {
        const result = await updateProfile({ ...formData, id: user.id });
        if (result.success) {
          localStorage.setItem('token', result.accessToken);
          notification.success({ message: 'Success', description: 'Updated successfully' });
          dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
        }
      }
    })
  }

  return (
    <Flex $style={{
      p: '2rem',
      w: '100%'
    }}>
      <Flex $style={{
        gap: '3rem',
        w: '100%'
      }}>
        <Flex $style={{
          fDirection: 'column',
          hAlign: 'space-between',
          gap: '1rem',
          maxW: '14rem'
        }}>
          <Flex $style={{
            fDirection: 'column',
            gap: '1rem'
          }}>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'center',
                gap: '1rem'
            }}>
                <Image src={`${avatar}`} alt='' $style={{ w: '6rem', h: '6rem', bradius: '50%' }} />
                <Flex $style={{
                  gap: '1rem'
                }}>
                    <Upload onChange={data => handleImageChange(data.file, 1)} beforeUpload={(file, list) => beforeUpload(file, list, 1)} showUploadList={false}><UploadButton>Upload</UploadButton></Upload>
                    <CustomButton>Delete</CustomButton>
                </Flex>
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'center',
                gap: '1rem'
            }}>
                <Image src={`${cover}`} alt='' $style={{ w: '100%', h: '4rem' }} />
                <Flex $style={{
                  gap: '1rem'
                }}>
                    <Upload onChange={data => handleImageChange(data.file, 2)} beforeUpload={(file, list) => beforeUpload(file, list, 2)} showUploadList={false}><UploadButton>Upload</UploadButton></Upload>
                    <CustomButton>Delete</CustomButton>
                </Flex>
            </Flex>
          </Flex>
          <DeleteButton>Delete Account</DeleteButton>
        </Flex>
        <ProfileInfo autoComplete='off' onSubmit={onSubmit}>
          <Input value={formData.username} onChange={onChange} name='username' placeholder='Username' />
          <Input value={formData.displayName} onChange={onChange} name='displayName' placeholder='Display Name' />
          <Input value={formData.url} onChange={onChange} preSide={<Span $style={{ color: GV('gray') }}>https://gromm.com/</Span>} name='url' placeholder='Profile URL' />
          <Textarea value={formData.bio} onChange={onChange} name='bio' placeholder='Bio' />
          <SubmitButton type='submit'>Save</SubmitButton>
        </ProfileInfo>
      </Flex>
    </Flex>
  )
}

export default Settings;