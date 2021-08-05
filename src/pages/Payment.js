import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';

import AppContext from '../context/AppContext';
import sumTotal from '../utils/sumTotal';

import '../styles/components/Payment.scss';

export default function Payment() {
  const history = useHistory();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  // Configuración Paypal
  const paypalOptions = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleOnSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div key={item.productId} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}

        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={sumTotal(cart)}
            onButtonReady={() => console.log('Button ready!')}
            onSuccess={handleOnSuccess}
            onError={(error) => console.log('Error', error)}
            onCancel={(cancel) => console.log('Cancel', cancel)}
          />
        </div>
      </div>
    </div>
  );
}
