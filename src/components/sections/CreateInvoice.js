import React from 'react';
import {
  CreateInvoiceContainer,
  Darken,
  Title,
  InputFullWidth,
} from '../componentstyles/CreateInvoiceStyles';

const CreateInvoice = () => {
  return (
    <div>
      <CreateInvoiceContainer>
        <Title>Nieuwe Factuur</Title>
        <form>
          <h3>Rekening naar</h3>
          <label>Straat</label>
          <InputFullWidth type='text' name='client-street' id='client-street' />
          <div>
            <label>Stad</label>
            <br />
            <input type='text' name='client-city' id='client-city' />
            <label>Postcode</label>
            <br />
            <input type='text' name='client-postcode' id='client-postcode' />
            <label>Land</label>
            <br />
            <input type='text' name='client-country' id='client-country' />
          </div>
        </form>
      </CreateInvoiceContainer>
      <Darken />
    </div>
  );
};

export default CreateInvoice;
