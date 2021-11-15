import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Footer, Header, Result, Search } from "./components";
import { useArtistLazyQuery } from "./generated/graphql";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { container } from "./styles/App.module.css";
import AppContext from './context'
import { ContextState } from "./types/context";

const App: FunctionComponent = (): ReactElement => {
  // set values for search input
  const [values, setValues] = useState<string>("");
  const [state, setState] = useState<boolean>(false)

  // const [getArtists, { data, error }] = useLazyQuery(QUERY_ARTISTS);

  const [getArtists, { data, loading, error }] = useArtistLazyQuery();

  const updateQuery = () => {
    getArtists({ variables: { byName: values } });
  };

  useEffect(() => {
    setState(() => loading)
    return () => {}
  }, [loading])

  // function getSearch() {
  //   setPoplate(values);
  // }

  // add graphql query
  // if (loading) return <>"Loading..."</>;
  // if (error) return <>Error! ${error.message}</>;

  return (
    <AppContext.Provider value={{state, setState}}>
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
          <Search values={values} handleChange={setValues} handleClick={updateQuery} />
          {data && <Result data={data} />}
        </main>
        <Footer />
      </HelmetProvider>
    </AppContext.Provider>
  );
};

export default App;
