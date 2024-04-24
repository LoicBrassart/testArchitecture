import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Map = {
  __typename?: 'Map';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  pictureUrl: Scalars['String']['output'];
  pointsOfInterest?: Maybe<Array<Maybe<PoI>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MapInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  pictureUrl: Scalars['String']['input'];
  pointsOfInterest?: InputMaybe<Array<InputMaybe<PoIInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addScenario: Scenario;
};


export type MutationAddScenarioArgs = {
  scenario: ScenarioInput;
};

export type PoI = {
  __typename?: 'PoI';
  code?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type PoIInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  scenario?: Maybe<Scenario>;
  scenarios: Array<Scenario>;
};


export type QueryScenarioArgs = {
  scenarioId: Scalars['Int']['input'];
};

export type Scenario = {
  __typename?: 'Scenario';
  bannerUrl: Scalars['String']['output'];
  credits: Scalars['String']['output'];
  fullStory: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  maps?: Maybe<Array<Maybe<Map>>>;
  teaser: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ScenarioInput = {
  bannerUrl: Scalars['String']['input'];
  credits: Scalars['String']['input'];
  fullStory: Scalars['String']['input'];
  maps?: InputMaybe<Array<InputMaybe<MapInput>>>;
  teaser: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type GetScenariosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetScenariosQuery = { __typename?: 'Query', scenarios: Array<{ __typename?: 'Scenario', id: number, title: string, teaser: string, bannerUrl: string }> };

export type GetScenarioQueryVariables = Exact<{
  scenarioId: Scalars['Int']['input'];
}>;


export type GetScenarioQuery = { __typename?: 'Query', scenario?: { __typename?: 'Scenario', id: number, title: string, teaser: string, fullStory: string, bannerUrl: string, credits: string, maps?: Array<{ __typename?: 'Map', id: number, title?: string | null, description?: string | null, pictureUrl: string, pointsOfInterest?: Array<{ __typename?: 'PoI', id: number, code?: string | null, title: string, description: string } | null> | null } | null> | null } | null };

export type AddScenarioMutationVariables = Exact<{
  scenario: ScenarioInput;
}>;


export type AddScenarioMutation = { __typename?: 'Mutation', addScenario: { __typename?: 'Scenario', id: number, title: string, teaser: string, fullStory: string, bannerUrl: string, credits: string, maps?: Array<{ __typename?: 'Map', id: number, title?: string | null, description?: string | null, pictureUrl: string, pointsOfInterest?: Array<{ __typename?: 'PoI', id: number, code?: string | null, title: string, description: string } | null> | null } | null> | null } };


export const GetScenariosDocument = gql`
    query getScenarios {
  scenarios {
    id
    title
    teaser
    bannerUrl
  }
}
    `;

/**
 * __useGetScenariosQuery__
 *
 * To run a query within a React component, call `useGetScenariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScenariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScenariosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetScenariosQuery(baseOptions?: Apollo.QueryHookOptions<GetScenariosQuery, GetScenariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScenariosQuery, GetScenariosQueryVariables>(GetScenariosDocument, options);
      }
export function useGetScenariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScenariosQuery, GetScenariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScenariosQuery, GetScenariosQueryVariables>(GetScenariosDocument, options);
        }
export function useGetScenariosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetScenariosQuery, GetScenariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetScenariosQuery, GetScenariosQueryVariables>(GetScenariosDocument, options);
        }
export type GetScenariosQueryHookResult = ReturnType<typeof useGetScenariosQuery>;
export type GetScenariosLazyQueryHookResult = ReturnType<typeof useGetScenariosLazyQuery>;
export type GetScenariosSuspenseQueryHookResult = ReturnType<typeof useGetScenariosSuspenseQuery>;
export type GetScenariosQueryResult = Apollo.QueryResult<GetScenariosQuery, GetScenariosQueryVariables>;
export const GetScenarioDocument = gql`
    query getScenario($scenarioId: Int!) {
  scenario(scenarioId: $scenarioId) {
    id
    title
    teaser
    fullStory
    bannerUrl
    credits
    maps {
      id
      title
      description
      pictureUrl
      pointsOfInterest {
        id
        code
        title
        description
      }
    }
  }
}
    `;

/**
 * __useGetScenarioQuery__
 *
 * To run a query within a React component, call `useGetScenarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScenarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScenarioQuery({
 *   variables: {
 *      scenarioId: // value for 'scenarioId'
 *   },
 * });
 */
export function useGetScenarioQuery(baseOptions: Apollo.QueryHookOptions<GetScenarioQuery, GetScenarioQueryVariables> & ({ variables: GetScenarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScenarioQuery, GetScenarioQueryVariables>(GetScenarioDocument, options);
      }
export function useGetScenarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScenarioQuery, GetScenarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScenarioQuery, GetScenarioQueryVariables>(GetScenarioDocument, options);
        }
export function useGetScenarioSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetScenarioQuery, GetScenarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetScenarioQuery, GetScenarioQueryVariables>(GetScenarioDocument, options);
        }
export type GetScenarioQueryHookResult = ReturnType<typeof useGetScenarioQuery>;
export type GetScenarioLazyQueryHookResult = ReturnType<typeof useGetScenarioLazyQuery>;
export type GetScenarioSuspenseQueryHookResult = ReturnType<typeof useGetScenarioSuspenseQuery>;
export type GetScenarioQueryResult = Apollo.QueryResult<GetScenarioQuery, GetScenarioQueryVariables>;
export const AddScenarioDocument = gql`
    mutation AddScenario($scenario: ScenarioInput!) {
  addScenario(scenario: $scenario) {
    id
    title
    teaser
    fullStory
    bannerUrl
    credits
    maps {
      id
      title
      description
      pictureUrl
      pointsOfInterest {
        id
        code
        title
        description
      }
    }
  }
}
    `;
export type AddScenarioMutationFn = Apollo.MutationFunction<AddScenarioMutation, AddScenarioMutationVariables>;

/**
 * __useAddScenarioMutation__
 *
 * To run a mutation, you first call `useAddScenarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddScenarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addScenarioMutation, { data, loading, error }] = useAddScenarioMutation({
 *   variables: {
 *      scenario: // value for 'scenario'
 *   },
 * });
 */
export function useAddScenarioMutation(baseOptions?: Apollo.MutationHookOptions<AddScenarioMutation, AddScenarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddScenarioMutation, AddScenarioMutationVariables>(AddScenarioDocument, options);
      }
export type AddScenarioMutationHookResult = ReturnType<typeof useAddScenarioMutation>;
export type AddScenarioMutationResult = Apollo.MutationResult<AddScenarioMutation>;
export type AddScenarioMutationOptions = Apollo.BaseMutationOptions<AddScenarioMutation, AddScenarioMutationVariables>;