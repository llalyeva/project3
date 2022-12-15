import React, { Component } from 'react';
import './MovieItem.css';
import addFav from '../../redux/actions/addFav';
import store from '../../redux/reducers/store';
let name = "";
class MovieItem extends Component {
    state = {
        title: 'Добавить в список'
    }

// componentDidMount(){
//     store.subscribe(()=>{
//         console.log(store.getState().button)
//     })
// }
   


    render() {
        const { Title, Year, Poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={(e)=>{store.dispatch(addFav(this.props,document.querySelector('.favorites__name').value))
                e.target.innerHTML = 'Добавлено'}}>Добавить в список</button>
                </div>
                
            </article>
        );
    }
}
 
export default MovieItem;