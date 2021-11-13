import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Footer, Header, Result, Search } from "./components";
import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_ARTISTS } from "./graphql";
import axios from "axios";

const App: FunctionComponent = (): ReactElement => {
  // set values for search input
  const [values, setValues] = useState<string>("");
  const [poplate, setPoplate] = useState<string>("");

  // const [getArtists, { data, error }] = useLazyQuery(QUERY_ARTISTS);

  const { loading, error, data } = useQuery(QUERY_ARTISTS, {
    variables: { byName: poplate },
  });

  // const updateQuery = () => {
  // 	getArtists({ variables: { byName: values } });
  // };

  function getSearch() {
    setPoplate(values);
  }

  useEffect(() => {

    console.log(data);

    // console.log(error);
    return () => {};
  }, [data]);

  // add graphql query
  // if (loading) return <>"Loading..."</>;
  // if (error) return <>Error! ${error.message}</>;

  return (
    <>
      <Header />
      <Search values={values} handleChange={setValues} />
      <button onClick={() => getSearch()}>Search</button>
      <Result />
      {loading && `Add loading`}
      <Footer />
    </>
  );
};

export default App;
