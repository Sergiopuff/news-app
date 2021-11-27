import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { normalize } from 'react-native-elements';
import colors from '../../constants/Colors';
import { articlesRequested } from '../../redux/slices/news';
import { useAppDispatch } from '../../hooks/redux';

function SearchInput() {
  const dispatch = useAppDispatch();

  const onChangeText = (text: string) => {
    dispatch(articlesRequested({ q: text }));
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Search text"
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: normalize(20),
    height: normalize(40),
    margin: normalize(12),
    borderWidth: normalize(1),
    borderColor: colors.darkBlue,
    backgroundColor: colors.background,
    padding: normalize(10),
    paddingHorizontal: normalize(20),
  },
});

export default SearchInput;
