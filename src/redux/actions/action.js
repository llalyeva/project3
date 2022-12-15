export default function findMovie(movies) {
  return {
    type: 'FIND_MOVIE',
    payload: {
      movies: movies
    }

  }
}