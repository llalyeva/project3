import React, { Component } from 'react';
import './MovieItem.css';
import addFav from '../../redux/actions/addFav';
import store from '../../redux/reducers/store';


class MovieItem extends Component {
    state = {
        title: 'Добавить в список'
    }

    render() {
        const { title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={(e)=>{store.dispatch(addFav(this.props))
                e.target.innerHTML = 'Добавлено'}}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;