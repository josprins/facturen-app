import React from 'react';
import {
  ItemContainer,
  ItemID,
  ItemText,
  ItemAmount,
  ItemStatus,
} from '../componentstyles/InvoiceItemStyles.js';

const InvoiceItem = props => {
  return (
    <ItemContainer>
      <ItemID>
        <span style={{ color: '#7E88C3' }}>#</span>
        {props.id}
      </ItemID>
      <ItemText className='datum'>
        <span style={{ color: '#888EB0' }}>Vervaldag</span> {props.due}
      </ItemText>
      <ItemText className='name'>{props.name}</ItemText>
      <ItemAmount>€ {props.amount.toFixed(2)}</ItemAmount>
      <ItemStatus>{props.status}</ItemStatus>
      {window.innerWidth <= 715 ? null : (
        <a href='!#'>
          <i
            style={{
              color: '#7C5DFA',
              fontSize: '12px',
              float: 'right',
            }}
            className='fas fa-greater-than'
          ></i>
        </a>
      )}
    </ItemContainer>
  );
};

export default InvoiceItem;
