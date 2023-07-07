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

export const CategoriesScreen = () => {
  const styles = stylesFunction();
  const {theme} = useContext(ThemeContext);
  //const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  const renderItem = () => <ThemeText>CategoriesScreen</ThemeText>;

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
          data={[] /* simplePokemonList */}
          renderItem={() => renderItem()}
          /* keyExtractor={pokemon => pokemon.id} */
          /* onEndReached={loadPokemons} */
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          numColumns={2}
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
