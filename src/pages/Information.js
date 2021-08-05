import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Information.scss';

export default function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const history = useHistory();
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name').trim(),
      email: formData.get('email').trim(),
      address: formData.get('address').trim(),
      city: formData.get('city').trim(),
      phone: formData.get('phone').trim(),
    };

    // Validación
    const hasEmptyField = Object.values(buyer).some((field) => field === '');
    if (hasEmptyField) return;

    addToBuyer(buyer);
    form.current.reset();
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button onClick={handleSubmit} type="submit">
              Pagar
            </button>
          </div>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map((item) => (
          <div key={item.productId} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
