import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  FlatList,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import {LoadingComponent} from '../../components/LoadingComponent';
import {Edge} from '../../interfaces/productInterfaces';
import {stylesFunction} from './styles';
import {ProductCard} from '../../components/ProductCard';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {useSearchProducts} from '../../hooks/useSearchProducts';
import {SearchInput} from '../../components/SearchInput/SearchInput';

export const SearchProductsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dimensions = useWindowDimensions();
  const styles = stylesFunction(dimensions);
  const {theme} = useContext(ThemeContext);
  const {fetch, fetchMore, loading, products} = useSearchProducts({
    quantity: 4,
  });

  const fetchStatic = useRef(fetch);

  const renderItem = (item: Edge) => <ProductCard item={item} />;

  useEffect(() => {
    if (searchTerm.length === 0) {
      fetchStatic.current('**');
      return;
    }
    fetchStatic.current(searchTerm);
  }, [searchTerm]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={
            <SearchInput
              onDebounceChange={setSearchTerm}
              style={styles.searchInput}
            />
          }
          data={products}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.node.id}
          onEndReached={() => fetchMore(searchTerm)}
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
