import { Modal } from 'antd';
import React, { FC } from 'react';
import Settings from './settings';

interface SettingModalType {
  visible: boolean,
  onChange: (value: any) => void;
}

const SettingModal: FC<SettingModalType> = ({ visible, onChange }) => {
  return (
    <Modal open={visible} onCancel={() => onChange(false)} footer={null} closable={false} className='custom-modal' width={900}>
      <Settings />
    </Modal>
  )
}

export default React.memo(SettingModal);