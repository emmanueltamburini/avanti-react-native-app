import React from 'react';
import {View, FlatList} from 'react-native';
import {useCollection} from '../../hooks/useCollection';
import {Edge} from '../../interfaces/collectionInterfaces';
import {LoadingComponent} from '../../components/LoadingComponent';
import {CategoryCard} from '../../components/CategoryCard';
import {LogoComponent} from '../../components/LogoComponent';
import {stylesFunction} from './styles';

export const CategoriesScreen = () => {
  const styles = stylesFunction();
  const {collections, fetchMore, loading} = useCollection({
    quantity: 5,
  });
  const renderItem = (item: Edge) => <CategoryCard item={item} />;

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={<LogoComponent />}
          data={collections}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.node.id}
          onEndReached={fetchMore}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          numColumns={1}
        />
      </View>
    </View>
  );
};
