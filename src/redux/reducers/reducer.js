
const InitialState = {
    movies: [
        {
            imdbID: '',
            title: "",
            year: 0,
            poster: ""

        },
        {
            imdbID: '',
            title: "",
            year: 0,
            poster: ""

        },
        {
            imdbID: '',
            title: "",
            year: 0,
            poster: ""

        }
    ],
    searchLine: ""
}



export default function reducer(state = InitialState,action){
   if(action.type == 'FIND_MOVIE'){
    fetch(`http://www.omdbapi.com/?s=${action.payload.id}&apikey=28f6807c`)
 .then(res=>{return res.json()})
.then(data =>{ state.movies[0].imdbID = data.Search[0].imdbID
    state.movies[0].title = data.Search[0].Title
    state.movies[0].year = data.Search[0].Year
    state.movies[0].poster = data.Search[0].Poster

    state.movies[1].imdbID = data.Search[1].imdbID
    state.movies[1].title = data.Search[1].Title
    state.movies[1].year = data.Search[1].Year
    state.movies[1].poster = data.Search[1].Poster

    state.movies[2].imdbID = data.Search[2].imdbID
    state.movies[2].title = data.Search[2].Title
    state.movies[2].year = data.Search[2].Year
    state.movies[2].poster = data.Search[2].Poster
            })
        return state}
   }

