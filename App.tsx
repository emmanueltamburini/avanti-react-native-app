import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from './src/context/Theme/ThemeContext';
import {GraphQL} from './src/graphql/GraphQL';
import {Tabs} from './src/navigator/Tabs';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const App = () => {
  return (
    <AppState>
      <Tabs />
    </AppState>
  );
};

const AppState = ({children}: Props) => {
  return (
    <GraphQL>
      <ThemeProvider>{children}</ThemeProvider>
    </GraphQL>
  );
};
