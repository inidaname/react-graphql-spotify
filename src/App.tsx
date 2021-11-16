import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Footer, Header, Result, Search } from "./components";
import { useArtistLazyQuery } from "./generated/graphql";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { container, header } from "./styles/App.module.css";
import AppContext from "./context";

const App: FunctionComponent = (): ReactElement => {
  // set values for search input
  const [values, setValues] = useState<string>("");
  const [state, setState] = useState<boolean>(false);

  // const [getArtists, { data, error }] = useLazyQuery(QUERY_ARTISTS);

  const [getArtists, { data, loading, error }] = useArtistLazyQuery();

  const updateQuery = () => {
    getArtists({ variables: { byName: values } });
  };

  useEffect(() => {
    setState(() => loading);
    return () => {};
  }, [loading]);

  return (
    <AppContext.Provider value={{ state, setState }}>
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
        <main className={container}>
          <div className={header}>
            <Header />
            <Search
              values={values}
              handleChange={setValues}
              handleSubmit={updateQuery}
            />
          </div>
          {loading && <div><h3>Loading Search Result</h3></div>}
          {error && <div>{error}</div>}
          {data && <Result data={data} />}
        </main>
        <Footer />
      </HelmetProvider>
    </AppContext.Provider>
  );
};

export default App;
