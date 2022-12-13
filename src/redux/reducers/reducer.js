let newObjects=[];
let list =[];



const initialState = {
    movies: [],
    fav:[],
    listName: null,
    button: null
};


 function reducer(state = initialState,action){
   if(action.type === 'FIND_MOVIE'){
   fetch(`http://www.omdbapi.com/?s=${action.payload.id}&apikey=28f6807c`)
   .then(res=>{return res.json()})
   .then((data)=>{
       newObjects =[ {
                title: data.Search[0].Title,
                imdbID: data.Search[0].imdbID,
                year: data.Search[0].Year,
                poster: data.Search[0].Poster
            },
            {
                title: data.Search[1].Title,
                imdbID: data.Search[1].imdbID,
                year: data.Search[1].Year,
                poster: data.Search[1].Poster
            },
            {
                title: data.Search[2].Title,
                imdbID: data.Search[2].imdbID,
                year: data.Search[2].Year,
                poster: data.Search[2].Poster
            },
            {
                title: data.Search[3].Title,
                imdbID: data.Search[3].imdbID,
                year: data.Search[3].Year,
                poster: data.Search[3].Poster
            },
            {
                title: data.Search[4].Title,
                imdbID: data.Search[4].imdbID,
                year: data.Search[4].Year,
                poster: data.Search[4].Poster
            },
            {
                title: data.Search[5].Title,
                imdbID: data.Search[5].imdbID,
                year: data.Search[5].Year,
                poster: data.Search[5].Poster
            },
            {
                title: data.Search[6].Title,
                imdbID: data.Search[6].imdbID,
                year: data.Search[6].Year,
                poster: data.Search[6].Poster
            },
            {
                title: data.Search[7].Title,
                imdbID: data.Search[7].imdbID,
                year: data.Search[7].Year,
                poster: data.Search[7].Poster
            },
            {
                title: data.Search[8].Title,
                imdbID: data.Search[8].imdbID,
                year: data.Search[8].Year,
                poster: data.Search[8].Poster
            },
            {
                title: data.Search[9].Title,
                imdbID: data.Search[9].imdbID,
                year: data.Search[9].Year,
                poster: data.Search[9].Poster
            }]         
   })
   setTimeout(() => {
            state.movies = [...newObjects]
          }, 1000)
  return state;
    }

 if(action.type === 'ADD_MOVIE'){
    console.log(state.fav.length)
    list.push(action.payload.id)

    for(let i = 0; i < list.length; i++){

    for(let j = i+1; j < list.length; j++)
    {
      if(list[i].imdbID===list[j].imdbID) {list.pop()
    break;}
    }}
    state.fav = list
    return state   
}

if(action.type === 'REMOVE'){
    list = [... list.filter(item => item.imdbID !== action.payload.id)]
    state.fav = list
    return state
}
  
if(action.type === 'SEND_LIST'){
state.listName = action.payload.name;
}

return state
}




    
export default reducer