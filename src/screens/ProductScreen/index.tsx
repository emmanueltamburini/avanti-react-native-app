import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParams as RootStackParamsTab1} from '../../navigator/Tab1';
import {RootStackParams as RootStackParamsTab2} from '../../navigator/Tab2';
import {useProduct} from '../../hooks/useProduct';
import {LoadingComponent} from '../../components/LoadingComponent';

interface Props
  extends StackScreenProps<
    RootStackParamsTab1 | RootStackParamsTab2,
    'ProductScreen'
  > {}

export const ProductScreen = ({navigation, route}: Props) => {
  const {id} = route.params;
  const {loading, product} = useProduct({id});

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <View>
      <Text>{product?.title}</Text>
    </View>
  );
};
