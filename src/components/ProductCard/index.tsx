import React, {useContext} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {ThemeText} from '../ThemeComponents/ThemeText';
import {FadeInImage} from '../FadeInImage';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';
import {Edge} from '../../interfaces/productInterfaces';

interface Props {
  item: Edge;
}

export const ProductCard = ({item}: Props) => {
  const windowDimension = useWindowDimensions();
  const {theme} = useContext(ThemeContext);

  const styles = stylesFunction(windowDimension, theme);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContainer}>
        <FadeInImage uri={item.node.featuredImage.url} style={styles.images} />
      </View>
      <View style={styles.rightContainer}>
        <ThemeText style={styles.name} ignoreTheme>
          {item.node.title}
        </ThemeText>
      </View>
    </View>
  );
};
