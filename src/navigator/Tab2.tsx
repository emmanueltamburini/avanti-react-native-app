import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchProductsScreen} from '../screens/SearchProductsScreen';
import {ProductScreen} from '../screens/ProductScreen';

export type RootStackParams = {
  SearchProductsScreen: undefined;
  ProductScreen: {id: string};
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
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};
