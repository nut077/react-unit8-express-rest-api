import Model from '../model'

const Articles = {
  ...Model,
  key: 'articles',
  permittedAttrs: ['title', 'authorId', 'content', 'categories']
};

export default Articles