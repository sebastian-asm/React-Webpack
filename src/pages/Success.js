import React, { useContext } from 'react';

import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';

import '../styles/components/Success.scss';

export default function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const mapLocation = useGoogleAddress(buyer.address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>
          ¡<strong>{buyer.name}</strong>, gracias por tu compra!
        </h2>
        <span>Tu pedido llegará pronto a la dirección indicada.</span>

        <div className="Success-map">
          <Map mapLocation={mapLocation} address={buyer.address} />
        </div>
      </div>
    </div>
  );
}
