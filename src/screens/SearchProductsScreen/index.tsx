import React, {useContext, useState} from 'react';
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
  const {fetchMore, loading, products} = useSearchProducts({quantity: 10});

  const renderItem = (item: Edge) => <ProductCard item={item} />;

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
          onEndReached={() => fetchMore('')}
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
