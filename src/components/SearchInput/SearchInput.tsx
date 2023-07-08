import React, {useContext, useEffect, useRef, useState} from 'react';
import {View, TextInput, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {useDebounce} from '../../hooks/useDebounce';
import {stylesFunction} from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounceChange?: (value: string) => void;
}

export const SearchInput = ({style, onDebounceChange}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [textValue, setTextValue] = useState('');
  const {debounce} = useDebounce(textValue);
  const onDebounceChangeStatic = useRef(onDebounceChange);

  useEffect(() => {
    if (onDebounceChangeStatic.current) {
      onDebounceChangeStatic.current(debounce);
    }
  }, [debounce]);

  const styles = stylesFunction(theme);
  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Search Item"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          placeholderTextColor={theme.colors.text}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" size={23} color={theme.colors.text} />
      </View>
    </View>
  );
};
