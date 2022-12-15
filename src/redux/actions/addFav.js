export default function addFav(id,name) {
    return {
      type: 'ADD_MOVIE',
      
      payload: {
        id: id,
        name: name
      }
    }
  }