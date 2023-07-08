import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  ScaledSize,
} from 'react-native';
import {SearchInput} from '../../components/SearchInput/SearchInput';
import {HeaderTitle} from '../../components/HeaderTitle';
import {useProducts} from '../../hooks/useProducts';
import {LoadingComponent} from '../../components/LoadingComponent';
import {Edge} from '../../interfaces/productInterfaces';
import {ThemeText} from '../../components/ThemeComponents/ThemeText';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/Navigator';
import {TouchableIcon} from '../../components/TouchableIcon';
import {bigWidthScreen} from '../../helpers/utils';

interface Props extends StackScreenProps<RootStackParams, 'ProductsScreen'> {}
export const ProductsScreen = ({route, navigation}: Props) => {
  const {id} = route.params;
  const dimensions = useWindowDimensions();

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

  const styles = stylesFunction(dimensions);

  const renderItem = (item: Edge) => <ThemeText>{item.node.title}</ThemeText>;

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
          ListHeaderComponent={
            searchTerm.length === 0 ? null : (
              <HeaderTitle
                title={`Searching: ${searchTerm}`}
                style={styles.headerTitle}
              />
            )
          }
          data={productsFiltered}
          onEndReached={fetchMore}
          onEndReachedThreshold={0.4}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.node.id}
          showsVerticalScrollIndicator={false}
          numColumns={1}
        />
      </View>
    </View>
  );
};

const stylesFunction = (dimensions: ScaledSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 10,
      alignItems: 'center',
    },
    headerContainer: {
      flex: bigWidthScreen(dimensions) ? 2 : 1,
      flexDirection: 'row',
      minHeight: bigWidthScreen(dimensions) ? 0 : 20,
    },
    backContainer: {
      flex: 1,
      paddingLeft: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchContainer: {
      flex: bigWidthScreen(dimensions) ? 15 : 8,
    },
    resultContainer: {
      flex: bigWidthScreen(dimensions) ? 8 : 12,
      flexDirection: 'row',
    },
    searchInput: {
      zIndex: 9999,
      width: bigWidthScreen(dimensions) ? '90%' : '93%',
    },
    headerTitle: {
      alignItems: 'center',
      paddingHorizontal: 30,
      fontSize: 15,
    },
  });
