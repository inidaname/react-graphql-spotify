import React, { FunctionComponent, ReactElement } from 'react';
import { Header, Search } from './components';

const App: FunctionComponent = (): ReactElement => {
  return (
    <>
      <Header />
      <Search />
    </>
  );
}

export default App;
