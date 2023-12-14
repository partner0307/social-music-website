import { FC, useState } from 'react';
import { Flex, P, Span } from '@/components/basic';
import Image from '@/components/basic/img';
import { Input, Textarea } from '@/components/custom';
import {
  AvatarContainer,
  CustomButton,
  DeleteButton,
  MobileContainer,
  MobileSubmitButton,
  ProfileInfo,
  SubmitButton,
  UploadButton,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Upload, notification } from 'antd';
import { removeImage, updateProfile, uploadImage } from '@/actions/user';
import { authActions } from '@/redux/auth';
import { UPLOAD_URI } from '@/config';

interface FormDataType {
  firstname: string,
  lastname: string,
  username: string;
  displayName: string;
  bio: string;
}

const Settings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const [formData, setFormData] = useState<FormDataType>({
    firstname: user ? user.firstname : '',
    lastname: user ? user.lastname : '',
    username: user ? user.username : '',
    displayName: user ? user.displayName : '',
    bio: user ? user.bio : '',
  });
  const [avatar, setAvatar] = useState<string | ArrayBuffer | null>(
    user ? UPLOAD_URI + user.avatar : ''
  );
  const [cover, setCover] = useState<string | ArrayBuffer | null>(
    user ? UPLOAD_URI + user.cover : ''
  );

  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (file: any, flag: number) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (flag === 1) setAvatar(reader.result);
      else if (flag === 2) setCover(reader.result);
    };
  };

  const handleImageRemove = async (flag: number) => {
    const result = await removeImage({ id: user.id, flag });
    if (result.success) {
      localStorage.setItem('token', result.accessToken);
      notification.success({ message: 'Success', description: 'Removed successfully' });
      dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
      if (flag === 1) {
        setAvatar(UPLOAD_URI + 'avatar.png');
      } else if (flag === 2) {
        setCover(UPLOAD_URI + 'cover.png');
      }
    } else {
      notification.warning({
        message: 'Warning',
        description: 'Oops, it has some problem.',
      });
    }
  };

  const beforeUpload = async (file: any, fileList: any[], flag: number) => {
    const form = new FormData();
    form.append('file', file);
    form.append('id', user.id);
    form.append('flag', `${flag}`);
    const result = await uploadImage(form);
    if (result.success) {
      localStorage.setItem('token', result.accessToken);
      notification.success({ message: 'Success', description: 'Uploaded successfully' });
      dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
    } else {
      notification.warning({
        message: 'Warning',
        description: 'Oops, it has some problem.',
      });
    }

    return false;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    
    if (!formData.displayName) {
      notification.warning({ message: 'Warning', description: 'Please input display name' });
      return;
    }
    if (!formData.username) {
      notification.warning({ message: 'Warning', description: 'Please input profile URL' });
      return;
    }
    if (!/^[A-z_0-9]+(?:[ _-][A-z0-9]+)*$/.test(formData.username)) {
      notification.warning({ message: 'Warning', description: 'Username can contains only alphabet(A-Z, a-z), number(0-9), underscore(_).' });
      return;
    }

    Modal.confirm({
      title: 'Are you sure ?',
      content: 'Do you want to save this data ?',
      
      async onOk() {
        const result = await updateProfile({ ...formData, id: user.id });
        if (result.success) {
          localStorage.setItem('token', result.accessToken);
          notification.success({
            message: 'Success',
            description: 'Updated successfully',
          });
          if (user.username !== result.model.username) {
            window.location.href = `/u/${result.model.username}`;
          }
          dispatch(
            authActions.setUser({ isAuthenticated: true, user: result.accessToken })
          );
        } else {
          notification.warning({ message: 'Warning', description: result.message });
        }
      },
    });
  };

  return (
    <Flex
      $style={{
        p: '1rem',
        w: '100%',
      }}
    >
      <Flex
        $style={{
          gap: '3rem',
          w: '100%',
          queries: {
            680: {
              fDirection: 'column',
            },
          },
        }}
      >
        <Flex
          $style={{
            fDirection: 'column',
            hAlign: 'space-between',
            // gap: '10rem',
            maxW: '14rem',
            queries: {
              680: {
                maxW: '100%',
              },
            },
          }}
        >
          <Flex
            $style={{
              fDirection: 'column',
              gap: '1rem',
              queries: {
                680: {
                  fDirection: 'row',
                  gap: '2rem',
                  hAlign: 'space-between',
                },
                580: {
                  fDirection: 'column',
                },
              },
            }}
          >
            <Flex
              $style={{
                fDirection: 'column',
                vAlign: 'center',
                gap: '.5rem',
              }}
            >
              <AvatarContainer src={`${avatar}`} alt="" />
              <Flex
                $style={{
                  gap: '1rem',
                }}
              >
                <Upload
                  onChange={data => handleImageChange(data.file, 1)}
                  beforeUpload={(file, list) => beforeUpload(file, list, 1)}
                  showUploadList={false}
                >
                  <UploadButton>Upload</UploadButton>
                </Upload>
                <CustomButton onClick={() => handleImageRemove(1)}>Delete</CustomButton>
              </Flex>
            </Flex>
            <Flex
              $style={{
                fDirection: 'column',
                vAlign: 'center',
                gap: '.5rem',
              }}
            >
              <Image
                src={`${cover}`}
                alt=""
                $style={{ w: '100%', h: '4rem', bradius: '0' }}
              />
              <Flex
                $style={{
                  gap: '1rem',
                }}
              >
                <Upload
                  onChange={data => handleImageChange(data.file, 2)}
                  beforeUpload={(file, list) => beforeUpload(file, list, 2)}
                  showUploadList={false}
                >
                  <UploadButton>Upload</UploadButton>
                </Upload>
                <CustomButton onClick={() => handleImageRemove(2)}>Delete</CustomButton>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            $style={{
              hAlign: 'center',
            }}
          >
            <DeleteButton>Delete Account</DeleteButton>
          </Flex>
        </Flex>
        <ProfileInfo autoComplete="off" onSubmit={onSubmit}>
          <Input
            label="First Name*"
            value={formData.firstname}
            onChange={onChange}
            name="firstname"
            placeholder="First Name"
          />
          <Input
            label="Last Name*"
            value={formData.lastname}
            onChange={onChange}
            name="lastname"
            placeholder="Last Name"
          />
          <Input
            label="Display Name*"
            value={formData.displayName}
            onChange={onChange}
            name="displayName"
            placeholder="Display Name"
          />
          <Input
            label="Profile URL*"
            value={formData.username}
            onChange={onChange}
            gap="0"
            preSide={<Span>https://gromm.com/</Span>}
            name="username"
            placeholder="Profile URL"
          />
          <Textarea
            label="Bio"
            value={formData.bio}
            onChange={onChange}
            name="bio"
            placeholder="Bio"
          />
          <SubmitButton type="submit">Save</SubmitButton>
          <MobileContainer>
            {/* <MobileDeleteButton type="button">Delete Account</MobileDeleteButton> */}
            <MobileSubmitButton type="submit">Save</MobileSubmitButton>
          </MobileContainer>
        </ProfileInfo>
      </Flex>
    </Flex>
  );
};

export default Settings;
