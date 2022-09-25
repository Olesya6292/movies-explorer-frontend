import { SEARCH_PARAMS } from '../utils/constants';

export function filterMovies(data, searchRequest, checked) {
  function isFilter(movie) {
    if (
      movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase()) &&
      ((checked && movie.duration <= SEARCH_PARAMS.SHORT_DURATION) || !checked)
    ) {
      return true;
    }
    return false;
  }
  const result = data.filter(isFilter);
  return result;
}
