import React, { FC } from 'react'
import { Modal } from 'antd'
import Signin from './signin'
import Signup from './signup'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '@/redux/auth'

const AuthModal: FC = () => {
  const dispatch = useDispatch();
  const { authVisible } = useSelector((state: any) => state.auth);
  return (
    <Modal open={authVisible > 0} onCancel={() => dispatch(authActions.setAuthVisible(0))} footer={null} className='custom-modal'>
        {authVisible === 1 && <Signin />}
        {authVisible === 2 && <Signup />}
    </Modal>
  )
}

export default React.memo(AuthModal);