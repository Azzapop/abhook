export function validatePost(nextState, replace) {
  const { postId } = nextState.params;
  const post = _.find(this.posts, (p) => { return p.slug === postId });
  if (!post) replace({ pathname: '/blog', state: { redirectFrom: nextState.location.pathname, error: true } });
}

export function redirectError(nextState, replace) {
  replace({ pathname: '/blog', state: { redirectFrom: nextState.location.pathname, error: true } });
}
