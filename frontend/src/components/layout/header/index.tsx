import { useDispatch, useSelector } from "react-redux";
import { CustomButton, Dropdown, DropdownItemContainer, HeaderContainer, UserAvatar, UserInfo } from "./style";
import { Flex, Link, P } from "@/components/basic";
import Image from "@/components/basic/img";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "@/redux/auth";
import { DiAptana } from "react-icons/di";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import AuthModal from "@/pages/auth";
import SettingModal from "@/pages/private";
import { UPLOAD_URI } from "@/config";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const [isDropdown, setIsDropdown] = useState<boolean>(false);
    const [authVisible, setAuthVisible] = useState<number>(0);
    const [settingVisible, setSettingVisible] = useState<boolean>(false);
    
    const dropdownRef: any = useRef(null);
    const menuButtonRef:any = useRef(null);

    const handleAuthVisible = useCallback((value: number) => setAuthVisible(value), [setAuthVisible]);
    const handleSettingVisible = useCallback((value: boolean) => setSettingVisible(value), [setSettingVisible]);

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
                <Flex $style={{
                    gap: '1rem'
                }}>
                    <CustomButton onClick={() => setAuthVisible(1)}>Sign In</CustomButton>
                    <CustomButton onClick={() => setAuthVisible(2)}>Sign Up</CustomButton>
                </Flex>
            )
            : (
                <UserInfo>
                    <UserAvatar ref={menuButtonRef}>
                        <Image src={`${UPLOAD_URI + user.avatar}`} alt="" $style={{ w: '1.5rem', h: '1.5rem', bradius: '50%' }} />
                        <P>{user.fullName}</P>
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
            )}
            <AuthModal visible={authVisible} onChange={handleAuthVisible} />
            <SettingModal visible={settingVisible} onChange={handleSettingVisible} />
        </HeaderContainer>
    )
}

export default Header;
