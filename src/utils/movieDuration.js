export function getFilmDuration(movie) {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    return (hours === 0 ? '' : `${hours}ч `) + `${minutes}м`;
  }