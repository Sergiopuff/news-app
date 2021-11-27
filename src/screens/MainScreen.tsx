import * as React from 'react';
import { RootTabScreenProps } from '../types/general';
import { StyleSheet, View } from 'react-native';
import { Button, normalize } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { articlesRequested } from '../redux/slices/news';
// import articles from '../constants/articlesResponse';
import SearchInput from '../components/searchInput';
import colors from '../constants/Colors';
import CategoriesList from '../components/categoriesList';

// const collection = [...articles];

function MainScreen({ navigation }: RootTabScreenProps<'MainScreen'>) {
  const collection = useAppSelector((state) => state.news.articles.collection);
  const dispatch = useAppDispatch();

  return (
    <KeyboardAwareScrollView
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <SearchInput />
        <CategoriesList />

        <View style={styles.separator} />
        <Button
          title="Request articles"
          type="clear"
          onPress={() => {
            dispatch(articlesRequested({}));
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: { height: '100%', backgroundColor: colors.lightBlue },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: normalize(16),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: 'gray',
    marginVertical: 12,
    height: 1,
    width: '80%',
  },
});

export default MainScreen;
