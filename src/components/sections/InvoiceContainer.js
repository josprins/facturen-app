import React from 'react';
import InvoiceItem from './InvoiceItem';
import data from '../../data.json';

const InvoiceContainer = props => {
  props.getSmallDevice(715);
  return (
    <div>
      {data.map(invoice => (
        <InvoiceItem
          key={invoice.id}
          id={invoice.id}
          due={invoice.paymentDue}
          name={invoice.clientName}
          amount={invoice.total}
          status={invoice.status}
        />
      ))}
    </div>
  );
};

export default InvoiceContainer;
