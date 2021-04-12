import React from 'react';
import {
  Wrapper,
  LogoIllustration,
  LogoIllustration2,
  LogoImg,
  MoonIcon,
  AvatarContainer,
  AvatarContainerMobile,
  Avatar,
  WrapperMobile,
  LogoIllustrationMobile,
  LogoIllustrationMobile2,
  AvatarMobile,
  MoonIconMobile,
} from '../componentstyles/InfoStyles';
import logo from '../../assets/logo.svg';
import moon from '../../assets/icon-moon.svg';
import avatar from '../../assets/image-avatar.jpg';

const InfoSection = () => {
  return (
    <div>
      {/* Render for desktop */}
      <Wrapper>
        <LogoIllustration>
          <LogoIllustration2>
            <LogoImg src={logo} alt='logo' />
          </LogoIllustration2>
        </LogoIllustration>
        <MoonIcon src={moon} alt='moon-icon' />
        <AvatarContainer>
          <Avatar src={avatar} />
        </AvatarContainer>
      </Wrapper>

      {/* Render for Mobile */}
      <WrapperMobile>
        <LogoIllustrationMobile>
          <LogoIllustrationMobile2>
            <LogoImg src={logo} alt='logo' />
          </LogoIllustrationMobile2>
        </LogoIllustrationMobile>
        <AvatarContainerMobile>
          <AvatarMobile src={avatar} />
        </AvatarContainerMobile>
        <MoonIconMobile src={moon} alt='moon-icon' />
      </WrapperMobile>
    </div>
  );
};

export default InfoSection;
