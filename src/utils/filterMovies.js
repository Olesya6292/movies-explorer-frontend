export function filterMovies(data, searchRequest, checked) {
    function isFilter(movie) {
      if (
        movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase()) &&
        ((checked && movie.duration <= 40) || !checked)
      ) {
        return true;
      }
      return false;
    }
    const result = data.filter(isFilter);
    return result;
  }