// import { call, put, select, takeLatest, debounce } from "redux-saga/effects";
import { call, put, select, takeLatest, debounce } from 'typed-redux-saga';
import {
  articlesRequested,
  articlesSucceeded,
  articlesFailed,
} from '../../redux/slices/news';

import { getSources, getTopHeadlines, getEverything } from './api';
import { DraftState } from '../../types/storeTypes';

function* articlesRequest() {
  try {
    const getParams = (state: DraftState) => state.news.topHeadlines.params;
    const params = yield* select(getParams);

    const response = yield* call(getEverything, { params });
    const { articles } = response.data;
    yield put(articlesSucceeded({ articles }));
  } catch (error) {
    yield put(articlesFailed({ error }));
  }
}

function* newsSaga() {
  yield debounce(700, articlesRequested, articlesRequest);
}

export default newsSaga;
