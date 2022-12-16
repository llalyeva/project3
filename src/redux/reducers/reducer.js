
let newObjects = [];
let list = [];

const initialState = {
    movies: [],
    fav: [],
    listName: null,
    button: false
};


function reducer(state = initialState, action) {
    if (action.type === 'FIND_MOVIE') {
        const movies = action.payload.movies;
        return {
            ...state,
            movies
        }
    }
    if (action.type === 'ADD_MOVIE') {
        list.push(action.payload.id)
        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[i].imdbID === list[j].imdbID) {
                    list.pop()
                    break;
                }
            }
        }

        state.fav = list
        console.log(action.payload.name.length)

        if(action.payload.name.length !== 0) state.button = false;
        else state.button = true
        console.log(state)
        return { ...state }

    }

    if (action.type === 'REMOVE') {
        list = [...list.filter(item => item.imdbID !== action.payload.id)]

        return {
            ...state,
            list
        }
    }

    if (action.type === 'SEND_LIST') {
        state.listName = action.payload.name;
        console.log(list)
    }
    return state
}





export default reducer