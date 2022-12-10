export default function findMovie(id) {
    return {
      type: 'FIND_MOVIE',
      payload: {
        id: id
      }
    }
  }