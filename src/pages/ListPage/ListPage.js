import React, { Component } from 'react';
import './ListPage.css';
import { createStore } from 'redux';
import reducer from '../../redux/reducers/reducer';
import sendList from '../../redux/actions/sendList';
import store from '../../redux/reducers/store'
import { connect } from 'react-redux';
class ListPage extends Component {
    
    componentDidMount() {
        const id = this.props.match.params;
        console.log(id);
    }
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.props.title}</h1>
                <ul>
                    {this.props.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps =((state) => {

    return {
        movies: state.fav,
        title: state.listName

    }
})

export default connect(mapStateToProps)(ListPage);