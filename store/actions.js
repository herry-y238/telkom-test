export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';

export const fetchRepositoriesSuccess = (repositories) => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload: repositories,
});

export const fetchRepositories = (username) => async (dispatch) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repositories = await response.json();
  dispatch(fetchRepositoriesSuccess(repositories));
};