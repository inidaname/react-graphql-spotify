import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Button, Footer, Header, Result, Search } from "./components";
import { useArtistLazyQuery } from "./generated/graphql";

const App: FunctionComponent = (): ReactElement => {
  // set values for search input
  const [values, setValues] = useState<string>("");
  const [poplate, setPoplate] = useState<string>("");

  // const [getArtists, { data, error }] = useLazyQuery(QUERY_ARTISTS);

  const [getArtists, {data, loading, error}] = useArtistLazyQuery();

  const updateQuery = () => {
    getArtists({ variables: { byName: values } });
  };
  
  // function getSearch() {
    //   setPoplate(values);
    // }

  // add graphql query
  // if (loading) return <>"Loading..."</>;
  // if (error) return <>Error! ${error.message}</>;

  return (
    <>
      <Header />
      <Search values={values} handleChange={setValues} />
      <Button status={loading} handleClick={updateQuery} />
      {data && <Result data={data} />}
      <Footer />
    </>
  );
};

export default App;
