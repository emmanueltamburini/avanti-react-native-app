import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {ThemeText} from '../../components/ThemeComponents/ThemeText';
import {globalStyles} from '../../theme/appTheme';
import {HeaderTitle} from '../../components/HeaderTitle';
import {useCollection} from '../../hooks/useCollection';
import {Edge} from '../../interfaces/collectionInterfaces';
import {LoadingComponent} from '../../components/LoadingComponent';

export const CategoriesScreen = () => {
  const styles = stylesFunction();
  const {theme} = useContext(ThemeContext);
  const {collections, fetchMore, loading} = useCollection({
    quantity: 4,
    pagination: 4,
  });
  const renderItem = (item: Edge) => <ThemeText>{item?.node?.title}</ThemeText>;

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.galeriaavanti.com/web/image/website/1/logo/AVANTI',
        }}
        style={globalStyles().avantiLogo}
      />
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
