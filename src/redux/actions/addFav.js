export default function addFav(id) {
    return {
      type: 'ADD_MOVIE',
      
      payload: {
        id: id
      }
    }
  }