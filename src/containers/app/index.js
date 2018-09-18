import React from 'react';
import AppRouter from './AppRouter';
import Header from '../../template/header';
import Footer from '../../template/footer';
import {Helmet} from "react-helmet";
import {defaultTitle,defaultDescription} from '../../config';

const App = () => (
  <div>
    <Helmet>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
    </Helmet>
    <Header/>
    <AppRouter/>
    <Footer/>
  </div>
);

export default App;