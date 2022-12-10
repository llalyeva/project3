import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import  store from '../../redux/reducers/store.js';






class Movies extends Component {
    componentDidMount() {
        store.subscribe(() => {
          const state = store.getState();
          this.setState({ 
            movies: state.movies
          });
        });}
    state = { 
        movies:[]
        // {
        //     imdbID: 'tt3896198',
        //     title: "Guardians of the Galaxy Vol. 2",
        //     year: 2017,
        //     poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

        // },
        // {
        //     imdbID: 'tt0068646',
        //     title: "The Godfather",
        //     year: 1972,
        //     poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

        // }
    }
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