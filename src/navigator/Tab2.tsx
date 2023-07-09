import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchProductsScreen} from '../screens/SearchProductsScreen';

export type RootStackParams = {
  SearchProductsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Tab2 = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchProductsScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SearchProductsScreen"
        component={SearchProductsScreen}
      />
    </Stack.Navigator>
  );
};
