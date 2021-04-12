import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 103px;
  background-color: #373b53;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoIllustration = styled.div`
  width: 103px;
  height: 103px;
  background-color: #7c5dfa;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
`;

export const LogoIllustration2 = styled.div`
  width: 103px;
  height: 51.5px;
  background-color: #9277ff;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  position: relative;
  top: 51.51px;
`;

export const LogoImg = styled.img`
  width: 40px;
  height: auto;
  position: relative;
  top: -15px;
  left: 32px;

  @media (max-width: 375px) {
    height: 28px;
    width: auto;
    left: 21px;
    top: -13px;
  }
`;

export const MoonIcon = styled.img`
  height: 20px;
  width: 20px;
  position: absolute;
  bottom: 120px;
  left: 41px;
`;

export const AvatarContainer = styled.div`
  width: 103px;
  height: 103px;
  border-top: 1px solid #494e6e;
  position: absolute;
  bottom: 0;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  bottom: 31px;
  left: 31px;
`;

// Styling for Mobile devices
export const WrapperMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    height: 80px;
    width: 100vw;
    background-color: #373b53;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 375px) {
    height: 72px;
  }
`;

export const LogoIllustrationMobile = styled(LogoIllustration)`
  height: 80px;

  @media (max-width: 375px) {
    height: 72px;
    width: 72px;
  }
`;

export const LogoIllustrationMobile2 = styled(LogoIllustration2)`
  height: 40px;
  top: 40px;

  @media (max-width: 375px) {
    width: 72px;
    height: 36px;
    top: 36px;
  }
`;

export const AvatarContainerMobile = styled(AvatarContainer)`
  height: 80px;
  top: 0;
  right: 0;
  border-top: none;
  border-left: 1px solid #494e6e;

  @media (max-width: 375px) {
    height: 72px;
    width: 72px;
  }
`;

export const MoonIconMobile = styled(MoonIcon)`
  top: 30px;
  right: 129px;
  left: auto;

  @media (max-width: 375px) {
    top: 26px;
    right: 90px;
  }
`;

export const AvatarMobile = styled(Avatar)`
  top: 20px;
  right: 32px;

  @media (max-width: 375px) {
    top: 22px;
    right: 18px;
    left: auto;
    height: 32px;
    width: 32px;
  }
`;
