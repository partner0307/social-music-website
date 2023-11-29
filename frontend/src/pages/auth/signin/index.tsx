import { useState, FC } from 'react';
import { Flex, Link, P, Span } from '@/components/basic';
import { AuthForm, CustomButton, CustomFont, CustomFont1, CustomLine, LetterContainer, SigninContainer, SubmitButton } from './style';
import { Checkbox, Icon, Input } from '@/components/custom';
import _ROUTERS from '@/constants/route.constant';
import { GV } from '@/utils/style.util';
import { Modal, notification } from 'antd';
import { google_oauth, login } from '@/actions/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '@/redux/auth';

type SigninType = {
    modalPropsChange: (value: any) => void
}

const Signin: FC<SigninType> = ({ modalPropsChange }) => {
    const dispatch = useDispatch();
    const [isAgree, setAgree] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e: any) => {
        e.preventDefault();
        
        const result = await login(formData);
        if (result.success) {
            localStorage.setItem('token', result.accessToken);
            dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken}));
            modalPropsChange(0);
            notification.success({ message: 'Success', description: 'Login Success!' });
        } else {
            notification.warning({ message: 'Warning', description: result.message });
        }
    }

    const handleOAuth = async () => {
        const result = await google_oauth();

        if (result.success) {
            localStorage.setItem('token', result.accessToken);
            dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
            modalPropsChange(0);
            notification.success({ message: 'success', description: 'Login Success!' });
        }
    }

    return (
        <SigninContainer>
            <AuthForm autoComplete='off'>
                <Flex $style={{ w: '100%', hAlign: 'center' }}>
                    <Flex $style={{ fDirection: 'column', w: '30rem', gap: '1.25rem' }}>
                        <Input value={email} type='email' name='email' onChange={onChange} preSide={<Icon icon='User' />} placeholder='Email Address' />
                        <Input type="password" value={password} name='password' onChange={onChange} preSide={<Icon icon='Lock' />} placeholder='Password' />
                        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
                        <Flex $style={{ hAlign: 'space-between' }}>
                            <Checkbox isChecked={isAgree} onChange={() => setAgree(!isAgree)} label={<P $style={{ size: GV('font-size-5') }}><CustomFont>Keep me logged in</CustomFont></P>} />
                            <P $style={{ weight: GV('weight-md'), size: GV('font-size-5') }}>Forgot Password</P>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex $style={{ vAlign: 'center' }}>
                    <CustomLine />
                    <LetterContainer>Or</LetterContainer>
                    <CustomLine />
                </Flex>
                <Flex $style={{ hAlign: 'center', gap: '1rem', w: '100%' }}>
                    <CustomButton type='button' onClick={() => handleOAuth()}><Icon icon='Google' /><Span $style={{ size: GV('font-size-5') }}>Continue with Google</Span></CustomButton>
                </Flex>
                <Flex $style={{ vAlign: 'center', gap: '0.25rem', w: '100%', hAlign: 'center' }}>
                    <CustomFont1>Don't have an account? </CustomFont1>
                    <Link to='#'><Span $style={{ size: GV('font-size-5'), color: 'purple' }} onClick={() => modalPropsChange(2)}>SignUp here</Span></Link>
                </Flex>
            </AuthForm>
        </SigninContainer>
    )
}

export default Signin;