import React, { FunctionComponent, ReactElement } from 'react';
import { Footer, Header, Result, Search } from './components';

const App: FunctionComponent = (): ReactElement => {
  return (
    <>
      <Header />
      <Search />
      <Result />
      <Footer />
    </>
  );
}

export default App;
