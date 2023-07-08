import React, {useContext} from 'react';
import {TouchableOpacity, View, useWindowDimensions} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {ThemeText} from '../ThemeComponents/ThemeText';
import {FadeInImage} from '../FadeInImage';
import {RootStackParams} from '../../navigator/Navigator';
import {Edge} from '../../interfaces/collectionInterfaces';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';

interface Props {
  item: Edge;
}

type navigationProp = StackNavigationProp<RootStackParams>;

export const CategoryCard = ({item}: Props) => {
  const windowDimension = useWindowDimensions();
  const {navigate} = useNavigation<navigationProp>();
  const {theme} = useContext(ThemeContext);

  const styles = stylesFunction(windowDimension, theme);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigate('ProductsScreen', {
          id: item.node.id,
          categoryName: item.node.title,
        })
      }>
      <View style={styles.cardContainer}>
        <View style={styles.leftContainer}>
          <FadeInImage uri={item.node.image.url} style={styles.images} />
        </View>
        <View style={styles.rightContainer}>
          <ThemeText style={styles.name} ignoreTheme>
            {item.node.title}
          </ThemeText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
