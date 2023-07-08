import React, {useContext} from 'react';
import {
  View,
  FlatList,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import {useProducts} from '../../hooks/useProducts';
import {LoadingComponent} from '../../components/LoadingComponent';
import {Edge} from '../../interfaces/productInterfaces';
import {StackScreenProps} from '@react-navigation/stack';
import {stylesFunction} from './styles';
import {ProductCard} from '../../components/ProductCard';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {HeaderTitle} from '../../components/HeaderTitle';
import {TouchableIcon} from '../../components/TouchableIcon';
import {RootStackParams} from '../../navigator/Tab1';

interface Props extends StackScreenProps<RootStackParams, 'ProductsScreen'> {}
export const ProductsScreen = ({route, navigation}: Props) => {
  const {id, categoryName} = route.params;
  const dimensions = useWindowDimensions();
  const styles = stylesFunction(dimensions);
  const {theme} = useContext(ThemeContext);
  const {fetchMore, loading, products} = useProducts({
    quantity: 10,
    pagination: 10,
    id,
  });

  const renderItem = (item: Edge) => <ProductCard item={item} />;

  if (loading) {
    return <LoadingComponent />;
  }

  const headerComponent = () => (
    <View style={styles.headerContainer}>
      <TouchableIcon
        activeOpacity={0.8}
        onPress={() => navigation.popToTop()}
        name="arrow-back-outline"
        size={32}
        color={theme.text}
        style={styles.backButton}
      />
      <HeaderTitle title={categoryName} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={headerComponent()}
          data={products}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.node.id}
          onEndReached={fetchMore}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          ListFooterComponent={
            <ActivityIndicator
              style={styles.activityIndicator}
              size={20}
              color={theme.opacityColor}
            />
          }
        />
      </View>
    </View>
  );
};
