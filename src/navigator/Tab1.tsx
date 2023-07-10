import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {ProductsScreen} from '../screens/ProductsScreen';
import {ProductScreen} from '../screens/ProductScreen';

export type RootStackParams = {
  CategoriesScreen: undefined;
  ProductsScreen: {id: string; categoryName: string};
  ProductScreen: {id: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};
