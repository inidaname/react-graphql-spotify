import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type Artist = {
  __typename?: 'Artist';
  albums?: Maybe<Array<Maybe<Album>>>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type ArtistAlbumsArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  hi?: Maybe<Scalars['String']>;
  queryArtists?: Maybe<Array<Maybe<Artist>>>;
};


export type QueryHiArgs = {
  message?: Maybe<Scalars['String']>;
};


export type QueryQueryArtistsArgs = {
  byName?: Maybe<Scalars['String']>;
};

export type Track = {
  __typename?: 'Track';
  artists?: Maybe<Array<Maybe<Artist>>>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  preview_url?: Maybe<Scalars['String']>;
};

export type ArtistQueryVariables = Exact<{
  byName: Scalars['String'];
}>;


export type ArtistQuery = { __typename?: 'Query', queryArtists?: Array<{ __typename?: 'Artist', name: string, image?: string | null | undefined, id?: string | null | undefined, albums?: Array<{ __typename?: 'Album', name?: string | null | undefined, image?: string | null | undefined, id?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };


export const ArtistDocument = gql`
    query Artist($byName: String!) {
  queryArtists(byName: $byName) {
    name
    image
    id
    albums {
      name
      image
      id
    }
  }
}
    `;

/**
 * __useArtistQuery__
 *
 * To run a query within a React component, call `useArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistQuery({
 *   variables: {
 *      byName: // value for 'byName'
 *   },
 * });
 */
export function useArtistQuery(baseOptions: Apollo.QueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
      }
export function useArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
        }
export type ArtistQueryHookResult = ReturnType<typeof useArtistQuery>;
export type ArtistLazyQueryHookResult = ReturnType<typeof useArtistLazyQuery>;
export type ArtistQueryResult = Apollo.QueryResult<ArtistQuery, ArtistQueryVariables>;