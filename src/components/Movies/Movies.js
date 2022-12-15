import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { connect } from 'react-redux';
import store from '../../redux/reducers/store';

class Movies extends Component {
   

    // componentDidMount() {
    //     setTimeout(() => {
    //         store.subscribe(() => {
    //             setTimeout(()=>{
    //             this.setState({
    //               movies: store.getState().movies
    //             }) 
    //             },1000)
    //       }, 2000)})}


    render() { 
        return ( 
            <ul className="movies">
                {this.props.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
 const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
 }
export default connect(mapStateToProps)(Movies);