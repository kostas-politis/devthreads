const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  COLLECTIONS: '/collections',
  JOBS: '/jobs',
  TAGS: '/tags',
  TAG: (id: string) => `/tags/${id}`,
  COMMUNITIES: '/communities',
  ASK_QUESTION: '/ask-question',
  PROFILE: (id: string) => `/profile/${id}`,
};

export default ROUTES;
