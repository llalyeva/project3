import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import store from '../../redux/reducers/store';

class Movies extends Component {
    state = { 
        movies: []
    }

    componentDidMount() {
        setTimeout(() => {
            store.subscribe(() => {
                setTimeout(()=>{
                this.setState({
                  movies: store.getState().movies
                }) 
                },1000)
          }, 2000)})}


    render() { 
        return ( 
            <ul className="movies">
                {this.state.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;