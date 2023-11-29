import { Modal } from 'antd';
import { FC, memo } from 'react';
import Settings from './profile/settings';

interface SettingModalType {
  visible: boolean,
  onChange: (value: any) => void;
}

const SettingModal: FC<SettingModalType> = ({ visible, onChange }) => {
  return (
    <Modal open={visible} onCancel={() => onChange(false)} footer={null} className='custom-modal' width={900}>
      <Settings modalPropsChange={onChange} />
    </Modal>
  )
}

export default memo(SettingModal);