
let newObjects = [];
let list = [];



const initialState = {
    movies: [],
    fav: [],
    listName: null,
    button: null
};


function reducer(state = initialState, action) {
    if (action.type === 'FIND_MOVIE') {
        console.log("FIND_MOVIE Worked in reducer")

        const movies = action.payload.movies;
        return {
            ...state,
            movies
        }
    }

    if (action.type === 'ADD_MOVIE') {
        console.log(state.fav.length)
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


    if (action.type === 'CHANGE_BUTTON') {
        state.button = action.payload.id;
        return state.button;
    }


    if (action.type === 'GET_LIST') {
        console.log(state);
    }
    return state
}





export default reducer