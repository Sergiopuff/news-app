export interface DraftState {
  news: NewsState;
}

export interface NewsState {
  articles: Collection;
  topHeadlines: Collection;
}

export interface Collection {
  collection: Array<object>;
  isLoading: boolean;
  error: object | null;
  params: ArticlesParams;
}

export interface ArticlesParams {
  [key: string]: unknown;
  q?: string | null;
  sources?: Array<string>;
  language?: string;
  sortBy?: 'publishedAt' | 'relevancy' | 'popularity';
  pageSize?: number;
  page?: number;
}

export interface ArticlesActionParams {
  type: string;
  payload: ArticlesParams;
}

export type Article = {
  source: {
    id: number | string;
    name: string;
  };
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface ArticlesRequestAction {
  type: string;
  payload: {
    articles: Array<Article>;
  };
}
