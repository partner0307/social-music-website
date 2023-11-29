import { FC, memo } from 'react'
import { Modal } from 'antd'
import Signin from './signin'
import Signup from './signup'

interface AuthModalType {
    visible: number,
    onChange: (value: any) => any
}

const AuthModal: FC<AuthModalType> = ({ visible, onChange }) => {
  return (
    <Modal open={visible > 0} onCancel={() => onChange(0)} footer={null} className='custom-modal'>
        {visible === 1 && <Signin modalPropsChange={onChange} />}
        {visible === 2 && <Signup modalPropsChange={onChange} />}
    </Modal>
  )
}

export default memo(AuthModal);