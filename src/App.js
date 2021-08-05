import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContext from './context/AppContext';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Information from './pages/Information';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Payment from './pages/Payment';
import Success from './pages/Success';
import useInitialState from './hooks/useInitialState';

export default function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
