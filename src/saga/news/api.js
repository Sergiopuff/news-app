import { axiosClient } from '../api';

const getSources = ({ params }) =>
  axiosClient().get('/top-headlines/sources', { params });

const getTopHeadlines = ({ params }) =>
  axiosClient().get('/top-headlines', { params });

const getEverything = ({ params }) =>
  axiosClient().get('/everything', { params });

export { getSources, getEverything, getTopHeadlines };
