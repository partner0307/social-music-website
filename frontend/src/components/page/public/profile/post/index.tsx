import { FC, useState } from 'react';
import { Flex, Heading, P } from '@/components/basic';
import { Textarea } from '@/components/custom';
import { Modal, notification } from 'antd';
import { CustomButton, TutorWrapper } from './style';
import Image from '@/components/basic/img';
import { useDispatch, useSelector } from 'react-redux';
import { savePost } from '@/actions/post';
import Tutor from '@/assets/img/tutor.gif';
import { authActions } from '@/redux/auth';

interface PostModalType {
  visible: boolean;
  onChange: (value: any) => void;
  onPostsChange: (value: any) => void;
}

const PostModal: FC<PostModalType> = ({ visible, onChange, onPostsChange }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const [code, setCode] = useState('');

  const onSave = () => {
    const match: any = code.match(/\/(\d+)/);
    if (!match) {
      notification.warning({
        message: 'Warning',
        description: 'Please input the correct code.',
      });
      return;
    }
    Modal.confirm({
      title: 'Are you sure ?',
      content: 'Do you want to save this code ?',
      async onOk() {
        const result: any = await savePost({ id: user.id, track_id: match[1], code });
        if (result.success) {
          localStorage.setItem('token', result.accessToken);
          notification.success({
            message: 'Success',
            description: 'Created successfully',
          });
          dispatch(
            authActions.setUser({ isAuthenticated: true, user: result.accessToken })
          );
          onPostsChange(result.user);
          refreshModal();
        }
      },
    });
  };

  const refreshModal = () => {
    setCode('');
    onChange(false);
  };

  return (
    <Modal
      open={visible}
      onCancel={() => refreshModal()}
      footer={null}
      closable={false}
      className="custom-modal"
    >
      <Flex
        $style={{
          fDirection: 'column',
          gap: '2rem',
          p: '2rem 1rem',
          queries: {
            480: {
              p: '1rem 0',
            },
          },
        }}
      >
        <Heading level={3} $style={{ align: 'center' }}>
          Add A Track To Your Profile
        </Heading>
        <Flex
          $style={{
            fDirection: 'column',
            gap: '1rem',
          }}
        >
          <Flex
            $style={{
              fDirection: 'column',
              gap: '0.25rem',
            }}
          >
            <P $style={{ size: '0.75rem' }}>Paste Your SoundCloud Embed Code Here</P>
            <Textarea
              value={code}
              onChange={(e: any) => setCode(e.target.value)}
              name="code"
              placeholder="Embeded Code"
            />
          </Flex>
          <TutorWrapper>
            <Image src={Tutor} alt="" $style={{ w: '100%', h: '100%' }} />
          </TutorWrapper>
          <Flex
            $style={{
              hAlign: 'flex-end',
              w: '100%',
            }}
          >
            <CustomButton onClick={() => onSave()}>Save</CustomButton>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default PostModal;
