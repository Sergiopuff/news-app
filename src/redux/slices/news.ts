import { createSlice, current } from '@reduxjs/toolkit';
import {
  ArticlesActionParams,
  ArticlesRequestAction,
  Collection,
  NewsState,
  ArticlesParams,
} from '../../types/storeTypes';

const initialParams: ArticlesParams = {
  q: null,
  sources: [],
  language: 'us',
  pageSize: 20,
  page: 1,
  sortBy: 'publishedAt',
};

const initialCollection: Collection = {
  collection: [],
  isLoading: false,
  error: null,
  params: initialParams,
};

const initialState: NewsState = {
  articles: initialCollection,
  topHeadlines: initialCollection,
};

export const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    reset: () => initialState,
    articlesRequested: (state: NewsState, action: ArticlesActionParams) => {
      state.articles.isLoading = true;
      Object.keys(action.payload).forEach((key) => {
        state.articles.params[key] = action.payload[key];
      });
    },
    articlesSucceeded: (state: NewsState, action: ArticlesRequestAction) => {
      const { articles } = action.payload;
      state.articles.collection = [...articles];
      state.articles.isLoading = false;
      state.articles.error = null;
    },
    articlesFailed: (state, action) => {
      const { error } = action.payload;
      state.articles.isLoading = false;
      state.articles.error = error;
    },
  },
});

export const { reset, articlesRequested, articlesSucceeded, articlesFailed } =
  slice.actions;

export default slice.reducer;
