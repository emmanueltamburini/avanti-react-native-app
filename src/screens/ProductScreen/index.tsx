import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {RootStackParams as RootStackParamsTab1} from '../../navigator/Tab1';
import {RootStackParams as RootStackParamsTab2} from '../../navigator/Tab2';
import {useProduct} from '../../hooks/useProduct';
import {LoadingComponent} from '../../components/LoadingComponent';
import {ItemHeader} from '../../components/ItemHeader';
import {ItemDetails} from '../../components/ItemDetails';
import {stylesFunction} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/Theme/ThemeContext';

interface Props
  extends StackScreenProps<
    RootStackParamsTab1 | RootStackParamsTab2,
    'ProductScreen'
  > {}

export const ProductScreen = ({route, navigation}: Props) => {
  const {id} = route.params;
  const {loading, product} = useProduct({id});
  const {top} = useSafeAreaInsets();
  const dimensions = useWindowDimensions();
  const {theme} = useContext(ThemeContext);
  const styles = stylesFunction(theme, top, dimensions);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <ItemHeader product={product} navigation={navigation} />
      <ItemDetails product={product} />
    </View>
  );
};
