import * as React from 'react';
import { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import colors from '../../constants/Colors';
import { normalize } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { articlesRequested } from '../../redux/slices/news';

const categories: string[] = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

function CategoriesList() {
  const dispatch = useAppDispatch();

  const sources = useAppSelector(
    (state) => state.news.articles.params.sources || [],
  );

  const pressHandler = (category: string) => {
    if (sources.includes(category)) {
      const index: number = sources.indexOf(category, 0);
      if (index > -1) {
        const filteredSources = [...sources];
        filteredSources.splice(index, 1);
        dispatch(articlesRequested({ sources: filteredSources }));
      }
    } else {
      dispatch(articlesRequested({ sources: [...sources, category] }));
    }
  };

  const isChecked = useCallback(
    (category) => sources.includes(category),
    [sources],
  );

  return (
    <View style={styles.container}>
      {categories.map((category, key) => (
        <TouchableOpacity
          key={key}
          style={[
            styles.button,
            isChecked(category) ? styles.buttonChecked : styles.buttonDefault,
          ]}
          onPress={() => pressHandler(category)}>
          <Text
            style={[
              styles.buttonText,
              isChecked(category) ? styles.textWhite : {},
            ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: normalize(8),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    borderRadius: normalize(16),
    paddingVertical: normalize(8),
    minWidth: '30%',
    marginVertical: normalize(6),
    marginHorizontal: normalize(4),
    borderWidth: normalize(1),
    borderColor: colors.darkBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDefault: {
    backgroundColor: colors.background,
  },
  buttonChecked: {
    backgroundColor: colors.darkBlue,
  },
  buttonText: {
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  textWhite: {
    color: colors.textWhite,
  },
});

export default CategoriesList;
