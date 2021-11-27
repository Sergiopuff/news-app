import { all } from 'redux-saga/effects';
import news from './news';

function* rootSaga() {
  yield all([news()]);
}
export default rootSaga;
