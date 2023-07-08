import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {globalStyles} from '../../theme/appTheme';
import {HeaderTitle} from '../../components/HeaderTitle';
import {useCollection} from '../../hooks/useCollection';
import {Edge} from '../../interfaces/collectionInterfaces';
import {LoadingComponent} from '../../components/LoadingComponent';
import {CategoryCard} from '../../components/CategoryCard';

export const CategoriesScreen = () => {
  const styles = stylesFunction();
  const {theme} = useContext(ThemeContext);
  const {collections, fetchMore, loading} = useCollection({
    quantity: 10,
    pagination: 10,
  });
  const renderItem = (item: Edge) => <CategoryCard item={item} />;

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={<HeaderTitle title="Avanti" />}
          data={collections}
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

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...globalStyles().globalMargin,
    },
    flatListContainer: {
      alignItems: 'center',
    },
    activityIndicator: {
      height: 100,
    },
  });
