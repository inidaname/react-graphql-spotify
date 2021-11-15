import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Button, Footer, Header, Result, Search } from "./components";
import { useArtistLazyQuery } from "./generated/graphql";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { container } from "./styles/App.module.css";

const App: FunctionComponent = (): ReactElement => {
  // set values for search input
  const [values, setValues] = useState<string>("");
  const [poplate, setPoplate] = useState<string>("");

  // const [getArtists, { data, error }] = useLazyQuery(QUERY_ARTISTS);

  const [getArtists, { data, loading, error }] = useArtistLazyQuery();

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
      <HelmetProvider>
        <Helmet>
          <title>Music Graphql Search</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        <main className={container}>
          <Search values={values} handleChange={setValues} />
          <Button status={loading} handleClick={updateQuery} />
          {data && <Result data={data} />}
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default App;
