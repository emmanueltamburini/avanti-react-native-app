import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {ProductsScreen} from '../screens/ProductsScreen';

export type RootStackParams = {
  CategoriesScreen: undefined;
  ProductsScreen: {id: string; categoryName: string};
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
    </Stack.Navigator>
  );
};
