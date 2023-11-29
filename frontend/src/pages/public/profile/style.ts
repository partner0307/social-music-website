import styled from "styled-components";
import { GV } from "@/utils/style.util";

export const ProfileContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const BannerContainer = styled.div<{ src: string }>`
    position: relative;
    ${({ src }) => src && `background: url(${src});`}
    background-size: cover;
    background-position: top center;
    width: 100%;
    height: 15rem;
    border-radius: 1rem;
    padding: 5rem 2rem 2rem;
`;

export const AvatarContainer = styled.img`
    /* ${({ src }) => src && `background: url(${src});`} */
    /* background-size: contain; */
    width: 120px;
    height: 120px;
    border-radius: 1rem;
`;

export const BioContainer = styled.div`
    width: 100%;
    max-width: 40rem;
`

export const StatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1.5rem;
    background: ${GV('secondary')};
    border-radius: 1rem;
`;

export const CustomButton = styled.button`
    display: flex;
    height: 2.5rem;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    border-radius: 0.5rem;
    background: ${GV('purple')};
`;