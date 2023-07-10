import React from 'react';
import {View, Text} from 'react-native';
import {Product} from '../../interfaces/singleProductInterfaces';

interface Props {
  product?: Product;
}

export const ItemHeader = ({product}: Props) => {
  return (
    <View>
      <Text>{product?.title}</Text>
    </View>
  );
};
