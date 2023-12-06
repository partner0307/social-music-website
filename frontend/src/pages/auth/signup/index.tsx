import { useState, FC, useEffect } from 'react';
import { Flex, Link, P, Span } from '@/components/basic';
import { AuthForm, CustomButton, CustomFont, CustomLine, LetterContainer, SignupContainer, SubmitButton } from './style';
import _ROUTERS from '@/constants/route.constant';
import { Checkbox, Icon, Input } from '@/components/custom';
import { GV } from '@/utils/style.util';
import { google_oauth, register } from '@/actions/auth';
import { Modal, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@/redux/auth';

const Signup: FC = () => {
    const dispatch = useDispatch();
    const { authVisible } = useSelector((state: any) => state.auth);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirm: ''
    });
    const [isAgree, setAgree] = useState(false);
    const { firstname, lastname, username, email, password, confirm } = formData;
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (formData.username === '') {
            notification.warning({ message: 'Warning', description: 'Please input username.' });
            return;
        }

        if (formData.email === '') {
            notification.warning({ message: 'Warning', description: 'Please input email.' });
            return;
        }

        if (formData.password === '') {
            notification.warning({ message: 'Warning', description: 'Please input password.' });
            return;
        }

        if (formData.confirm === '') {
            notification.warning({ message: 'Warning', description: 'Please input confirm.' });
            return;
        }

        if (formData.password !== formData.confirm) {
            notification.warning({ message: 'Warning', description: 'Please check password. Not match.' });
            return;
        }
        
        if (!isAgree) {
            notification.warning({ message: 'Warning', description: 'Please check our terms of service and privacy policies' });
            return;
        }
        
        Modal.confirm({
            title: 'Are you sure ?',
            content: 'Do you want to register this informations ?',
            async onOk() {
                const result = await register(formData);
                if (result.success) {
                    localStorage.setItem('token', result.accessToken);
                    dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
                    dispatch(authActions.setAuthVisible(0));
                    setFormData({ firstname: '', lastname: '', username: '', email: '', password: '', confirm: '' });
                    notification.success({ message: 'Success', description: 'Registered successfully!' });
                } else {
                    notification.warning({ message: 'Warning', description: result.message });
                }
            }
        })
    }

    const handleOAuth = async () => {
        const result = await google_oauth();

        if (result.success) {
            localStorage.setItem('token', result.accessToken);
            dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
            dispatch(authActions.setAuthVisible(0));
            setFormData({ firstname: '', lastname: '', username: '', email: '', password: '', confirm: '' });
            notification.success({ message: 'success', description: 'Registered successfully!' });
        }
    }

    useEffect(() => {
        if (authVisible) {
            setFormData({ firstname: '', lastname: '', username: '', email: '', password: '', confirm: '' });
            setAgree(false);
        }
    }, [authVisible]);

    return (
        <SignupContainer>
            <AuthForm autoComplete='off'>
                <Flex $style={{ fDirection: 'column', gap: '1rem' }}>
                    <Input value={username} name='username' placeholder='Username' preSide={<Icon icon='User' />} onChange={onChange} />
                    <Input value={firstname} name='firstname' placeholder='First Name' preSide={<Icon icon='User' />} onChange={onChange} />
                    <Input value={lastname} name='lastname' placeholder='Last Name' preSide={<Icon icon='User' />} onChange={onChange} />
                    <Input value={email} type='email' name='email' placeholder='Email Address' preSide={<Icon icon='Email' />} onChange={onChange} />
                    <Input type='password' value={password} name='password' placeholder='Password' preSide={<Icon icon='Lock' />} onChange={onChange} />
                    <Input type='password' value={confirm} name='confirm' placeholder='Confirm Password' preSide={<Icon icon='Lock' />} onChange={onChange} />
                    <Flex $style={{ fDirection: 'colun' }}>
                        <Checkbox isChecked={isAgree} onChange={() => setAgree(!isAgree)} label={<Flex $style={{ flex: '1' }}><P $style={{ size: GV('font-size-6') }}>I have read <Link to='#' $style={{ color: GV('purple') }}>terms and conditions</Link>  and <Link to='#' $style={{ color: GV('purple') }}>terms of clients</Link>  and I agree with the terms.</P></Flex>} />
                    </Flex>
                </Flex>
                <SubmitButton onClick={onSubmit} type='submit'>Sign up</SubmitButton>
                <Flex $style={{ vAlign: 'center' }}>
                    <CustomLine />
                    <LetterContainer>Or</LetterContainer>
                    <CustomLine />
                </Flex>
                <Flex $style={{ hAlign: 'center', gap: '1rem', w: '100%' }}>
                    <CustomButton type='button' onClick={() => handleOAuth()}><Icon icon='Google' /><P $style={{ size: GV('font-size-5') }}>Continue with Google</P></CustomButton>
                </Flex>
                <Flex $style={{ vAlign: 'center', gap: '0.25rem', w: '100%', hAlign: 'center' }}>
                    <CustomFont>Already have an account? </CustomFont>
                    <Link to='#'><P $style={{ size: GV('font-size-5'), color: 'purple' }} onClick={() => dispatch(authActions.setAuthVisible(1))}>Sign In</P></Link>
                </Flex>
            </AuthForm>
        </SignupContainer>
    )
}

export default Signup;