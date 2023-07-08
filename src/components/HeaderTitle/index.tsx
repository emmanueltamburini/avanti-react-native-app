import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeText} from '../ThemeComponents/ThemeText';
import {globalStyles} from '../../theme/appTheme';

interface Props {
  title: string;
  avoidTop?: boolean;
  avoidBottom?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const HeaderTitle = ({title, avoidTop, avoidBottom, style}: Props) => {
  const {top} = useSafeAreaInsets();
  const styles = stylesFunction(avoidTop ? 0 : top, avoidBottom ? 0 : 20);

  return (
    <View style={{...styles.header, ...(style as any)}}>
      <ThemeText style={globalStyles().title}>{title}</ThemeText>
    </View>
  );
};

const stylesFunction = (top: number, bottom: number) =>
  StyleSheet.create({
    header: {
      marginTop: top + 20,
      marginBottom: bottom,
    },
  });
