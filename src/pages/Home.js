import React from 'react';
import { Helmet } from 'react-helmet';

import Products from '../components/Products';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tiendita Pop!</title>
        <meta name="description" content="Tiendita de Funko Pop!" />
      </Helmet>
      <Products />
    </>
  );
}
