import React from 'react';
import {View, useWindowDimensions, ScrollView} from 'react-native';
import {Product} from '../../interfaces/singleProductInterfaces';
import {stylesFunction} from './styles';
import {ThemeText} from '../ThemeComponents/ThemeText';
import {FadeInImage} from '../FadeInImage';

interface Props {
  product?: Product;
}

export const ItemDetails = ({product}: Props) => {
  const dimensions = useWindowDimensions();
  const styles = stylesFunction(dimensions);

  return (
    <ScrollView
      style={{...styles.container, ...styles.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      <View style={{...styles.containerInfo, ...styles.topSeparator}}>
        <ThemeText style={styles.title}>Description</ThemeText>
        <View style={styles.listContainer}>
          <ThemeText style={{...styles.regularText, ...styles.rightSeparator}}>
            {product?.description}
          </ThemeText>
        </View>
      </View>
      {product?.variants && (
        <View style={styles.containerInfo}>
          <ThemeText style={styles.title}>Inventory</ThemeText>
          <View style={styles.listContainer}>
            <ThemeText
              style={{...styles.regularText, ...styles.rightSeparator}}>
              {product?.totalInventory}
            </ThemeText>
          </View>
        </View>
      )}
      {product?.variants && (
        <View style={styles.containerInfo}>
          <ThemeText style={styles.title}>Variants</ThemeText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {product?.variants?.edges.map(item => {
              return (
                <View key={`variants-${item.node.image.id}`}>
                  <FadeInImage
                    uri={item.node.image.url}
                    style={styles.basicVariant}
                  />
                  <ThemeText style={styles.smallText}>
                    {item.node.price.currencyCode} {item.node.price.amount}
                  </ThemeText>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
      <View style={styles.spacer} />
    </ScrollView>
  );
};
