import { useDispatch, useSelector } from "react-redux";
import { AuthButtonWrapper, AvatarImage, CustomButton, Dropdown, DropdownItemContainer, HeaderContainer, IconWrapperButton, MobileAuthButtonWrapper, UserAvatar, UserInfo } from "./style";
import { Flex, Link, P } from "@/components/basic";
import Image from "@/components/basic/img";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "@/redux/auth";
import { DiAptana } from "react-icons/di";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import AuthModal from "@/pages/auth";
import { UPLOAD_URI } from "@/config";
import { Icon } from "@/components/custom";
import Logo from '@/assets/img/logo.png';
import MenuDrawer from "./elements/drawer";
import { menuActions } from "@/redux/menu";
import SettingModal from "@/components/page/header";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const [isDropdown, setIsDropdown] = useState<boolean>(false);
    const [settingVisible, setSettingVisible] = useState<boolean>(false);
    
    const dropdownRef: any = useRef(null);
    const menuButtonRef:any = useRef(null);

    const handleSettingVisible = (value: boolean) => setSettingVisible(value);
    const handleMobileVisible = (value: boolean) => dispatch(menuActions.setVisible(value));

    const Logout = () => {
        localStorage.removeItem('token');
        dispatch(authActions.setUser({ isAuthenticated: false, user: null }))
        navigate('/');
    }

    useEffect(() => {
        const windowClick = (e: any) => {
            if(isDropdown === true) {
                if (dropdownRef && dropdownRef.current !== null) {
                    if (!dropdownRef.current.contains(e.target)) {
                        setIsDropdown(false);
                    }
                }
            }
            else {
                if(menuButtonRef && menuButtonRef.current !== null){
                    if(menuButtonRef.current.contains(e.target)){
                        setIsDropdown(true)
                    }
                }
            }
        };

        window.addEventListener("click", windowClick);

        return () => window.removeEventListener("click", windowClick);
    }, [isDropdown]);

    return (
        <HeaderContainer>
            {!isAuthenticated 
            ? (
                <>
                    <AuthButtonWrapper>
                        <CustomButton onClick={() => dispatch(authActions.setAuthVisible(1))}>Sign In</CustomButton>
                        <CustomButton onClick={() => dispatch(authActions.setAuthVisible(2))}>Sign Up</CustomButton>
                    </AuthButtonWrapper>
                    <MobileAuthButtonWrapper>
                        <Link to="/">
                            <Image src={Logo} alt="No Logo" $style={{
                                w: '7rem',
                                h: '2rem',
                                bradius: '0'
                            }} />
                        </Link>
                        <IconWrapperButton onClick={() => handleMobileVisible(true)}><Icon icon="Menu" /></IconWrapperButton>
                    </MobileAuthButtonWrapper>
                </>
            )
            : (
                <Flex $style={{
                    hAlign: 'flex-end',
                    vAlign: 'center',
                    w: '100%',
                    queries: {
                        768: {
                            hAlign: 'space-between'
                        }
                    }
                }}>
                    <IconWrapperButton onClick={() => handleMobileVisible(true)}><Icon icon="Menu" /></IconWrapperButton>
                    <UserInfo>
                        <UserAvatar ref={menuButtonRef}>
                            <AvatarImage src={`${UPLOAD_URI + user.avatar}`} alt="" />
                            <P>{user.username}</P>
                        </UserAvatar>
                        <Dropdown isDropdown={isDropdown} ref={dropdownRef}>
                            <DropdownItemContainer onClick={() => { setIsDropdown(false); handleSettingVisible(true); }}>
                                <DiAptana />
                                <P>Settings</P>
                            </DropdownItemContainer>
                            <DropdownItemContainer onClick={() => { setIsDropdown(false); Logout(); }}>
                                <FaArrowRightFromBracket />
                                <P>Logout</P>
                            </DropdownItemContainer>
                        </Dropdown>
                    </UserInfo>
                </Flex>
            )}
            <MenuDrawer />
            <AuthModal />
            <SettingModal visible={settingVisible} onChange={handleSettingVisible} />
        </HeaderContainer>
    )
}

export default Header;
