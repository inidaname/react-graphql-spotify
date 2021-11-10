import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Footer, Header, Result, Search } from './components';

const App: FunctionComponent = (): ReactElement => {
  const [values, setValues] = useState<string>('')
  
  return (
    <>
      <Header />
      <Search values={values} handleChange={setValues} />
      <Result />
      <Footer />
    </>
  );
}

export default App;
