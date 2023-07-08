import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import {SearchInput} from '../../components/SearchInput/SearchInput';
import {useProducts} from '../../hooks/useProducts';
import {LoadingComponent} from '../../components/LoadingComponent';
import {Edge} from '../../interfaces/productInterfaces';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/Navigator';
import {TouchableIcon} from '../../components/TouchableIcon';
import {stylesFunction} from './styles';
import {ProductCard} from '../../components/ProductCard';
import {ThemeContext} from '../../context/Theme/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'ProductsScreen'> {}
export const ProductsScreen = ({route, navigation}: Props) => {
  const {id} = route.params;
  const dimensions = useWindowDimensions();
  const styles = stylesFunction(dimensions);
  const {theme} = useContext(ThemeContext);
  const {fetchMore, loading, products} = useProducts({
    quantity: 10,
    pagination: 10,
    id,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [productsFiltered, setProductsFiltered] = useState<Edge[]>(products);

  useEffect(() => {
    if (searchTerm.length === 0) {
      return setProductsFiltered(products);
    }

    setProductsFiltered(
      products.filter(item =>
        item.node.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm, products]);

  const renderItem = (item: Edge) => <ProductCard item={item} />;

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backContainer}>
          <TouchableIcon
            activeOpacity={0.8}
            onPress={() => navigation.popToTop()}
            name="arrow-back-outline"
            size={32}
            color={theme.text}
          />
        </View>
        <View style={styles.searchContainer}>
          <SearchInput
            onDebounceChange={setSearchTerm}
            style={styles.searchInput}
          />
        </View>
      </View>
      <View style={styles.resultContainer}>
        <FlatList
          data={productsFiltered}
          onEndReached={fetchMore}
          onEndReachedThreshold={0.4}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.node.id}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
};
