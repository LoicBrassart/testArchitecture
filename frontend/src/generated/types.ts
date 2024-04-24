export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
