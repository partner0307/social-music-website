import styled from 'styled-components';

export const Newsletter = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  max-width: 1090px;
  height: 350px;
  width: 100%;
  gap: 30px;
  border-radius: 24px;
  background: #6ed8d2;
  box-shadow: 0px 23px 30px 0px rgba(0, 0, 0, 0.5);
  margin-bottom: -7rem;
`;

export const NewsImage1 = styled.img`
  width: 226px;
  height: 254px;
  border-radius: 0px 12px 12px 0px;
  box-shadow: 11px 0px 12px 0px rgba(0, 0, 0, 0.25);
  z-index: 3;
`;

export const NewsImage2 = styled.img`
  margin-left: -64px;
  width: 199px;
  height: 224px;
  border-radius: 12px;
  box-shadow: 8px 0px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

export const NewsImage3 = styled.img`
  margin-left: -64px;
  width: 174px;
  height: 196px;
  border-radius: 12px;
  z-index: 1;
`;