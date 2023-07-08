import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/Theme/ThemeContext';
import {GraphQL} from './src/graphql/GraphQL';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const App = () => {
  return (
    <AppState>
      <Navigator />
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
