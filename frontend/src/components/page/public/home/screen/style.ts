import Card from '@/components/custom/card';
import styled from 'styled-components';

export const SmallCardContainer = styled(Card)<{
  position?: 'left' | 'right';
  isFirst?: boolean;
}>`
  position: relative;
  overflow: initial;
  padding: 0.3rem;
  z-index: 5;

  @media (max-width: 1024px) {
    width: 12rem;
    > div:first-child {
      > div {
        height: 7.3rem;
      }
    }
  }

  @media (min-height: 1000px) {
    width: 20rem;
    >div:first-child {
      >div {
        height: 12.5rem;
      }
    }
  }
`;

export const BigCardContainer = styled(Card)<{
  position?: 'left' | 'right';
  isFirst?: boolean;
}>`
  @media (min-height: 1000px) {
    >div:first-child {
      >div {
        height: 27.5rem;
      }
    }
  }

  @media (max-width: 1024px) {
    /* width: 12rem; */
    > div:first-child {
      > div {
        height: 17.6rem;
      }
    }
  }
`;

export const SideRect = styled.div`
  width: 1.625rem;
  height: 1.0625rem;
  background: rgba(198, 245, 255, 0.5);
`;

export const UpRect = styled.div<{
  position?: 'left' | 'right';
}>`
  align-self: center;
  transform: translateX(
    ${({ position }) => (position === 'left' ? '-0.8rem' : '0.8rem')}
  );
  width: 1.25rem;
  height: 1.9375rem;
  background: rgba(198, 245, 255, 0.5);
`;

export const FirstRect = styled.div<{
  position?: 'left' | 'right';
}>`
  align-self: center;
  transform: translateX(
    ${({ position }) => (position === 'left' ? '-0.8rem' : '0.8rem')}
  );
  width: 1.25rem;
  height: 1.5625rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  background: rgba(198, 245, 255, 0.5);
`;
