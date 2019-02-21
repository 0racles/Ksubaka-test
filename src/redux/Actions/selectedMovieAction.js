export const SELECTED_MOVIE = `SELECTED_MOVIE`;

export const selectedMovieAction = (movieDetails) => {
  return {
      type: SELECTED_MOVIE,
      movieDetails
  }
}
