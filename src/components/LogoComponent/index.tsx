import React, {useContext} from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';

export const LogoComponent = () => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesFunction();

  return (
    <View style={styles.container}>
      <Svg viewBox="0 0 377.87 116.43">
        <Path
          stroke={theme.text}
          fill={theme.text}
          d="M319.56,27.91l-.1,60.56,12.55,0,.09-60.56Z"
        />
        <Path
          stroke={theme.text}
          fill={theme.text}
          d="M261.73,27.86v6.29a33.23,33.23,0,0,1,9.66-3.31,49.05,49.05,0,0,1,9.13-.45V88.51h12.54V30.39a49.93,49.93,0,0,1,9.26.46,32.57,32.57,0,0,1,9.6,3.3V27.86Z"
        />
        <Path
          stroke={theme.text}
          fill={theme.text}
          d="M251.74,27.91l0,38.53-28.83-38.5H200.65A15.74,15.74,0,0,1,206,30.34a35.24,35.24,0,0,1,5.39,4.05s.66.67,1.21,1.21c.39.38,2,2.22,2,2.22L253,88.49h1.3V27.91Z"
        />
        <Path
          stroke={theme.text}
          fill={theme.text}
          d="M211.36,36.64l0,0V88.49h2.54V39.33A16.82,16.82,0,0,0,211.36,36.64Z"
        />
        <Path
          stroke={theme.text}
          fill={theme.text}
          d="M175.7,88.48h28.18a20.12,20.12,0,0,1-4.79-1.66A19.38,19.38,0,0,1,194.58,83c-2.31-2.6-4.33-8.2-4.33-8.2L169.07,28l-13.82-.09S167.41,54.28,174.19,69H150.05l11.83-22.39-1.29-2.72L137.1,88.57h2.58l9-17h26.68c1.46,3.15,2.54,5.48,3,6.45,2.48,5.3,2.36,6.92,1.38,8.39S175.7,88.48,175.7,88.48Z"
        />
        <Path
          stroke={theme.text}
          fill={theme.text}
          d="M92.44,28h13.65l19,43.63L145.3,27.94h2.58L120.07,88.51Z"
        />
        <Path
          stroke={theme.text}
          fill={theme.text}
          d="M84.36,88.48h28.19a20.12,20.12,0,0,1-4.79-1.66A19.38,19.38,0,0,1,103.25,83c-2.32-2.6-4.33-8.2-4.33-8.2L77.73,28l-13.82-.09S76.08,54.28,82.85,69H58.72L70.55,46.56l-1.29-2.72L45.77,88.57h2.58l9-17H84L87,78c2.49,5.3,2.37,6.92,1.39,8.39S84.36,88.48,84.36,88.48Z"
        />
      </Svg>
    </View>
  );
};
