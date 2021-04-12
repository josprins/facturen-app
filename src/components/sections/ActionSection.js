import React from 'react';
import {
  ActionWrapper,
  Title,
  SubTitle,
  Button,
  Image,
  ImageContainer,
} from '../componentstyles/ActionStyles';
import FilterStatus from '../FilterStatus';
import plus from '../../assets/icon-plus.svg';

const ActionSection = props => {
  props.getSmallDevice(500);
  return (
    <ActionWrapper>
      <div className='title-container'>
        <Title>Facturen</Title>
        <SubTitle>
          {props.smallDevice ? '7 facturen' : 'Er zijn 7 facturen'}
        </SubTitle>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FilterStatus
          handleSelectMenu={props.handleSelectMenu}
          smallDevice={props.smallDevice}
        />
        <Button>
          <ImageContainer>
            <Image src={plus} alt='plus' />
          </ImageContainer>
          {props.smallDevice ? 'Nieuw' : 'Nieuwe Factuur'}
        </Button>
      </div>
    </ActionWrapper>
  );
};

export default ActionSection;
