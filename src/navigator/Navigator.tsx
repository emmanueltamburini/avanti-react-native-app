import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {ProductScreen} from '../screens/ProductScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/Theme/ThemeContext';

export type RootStackParams = {
  CategoriesScreen: undefined;
  ProductScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="CategoriesScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
