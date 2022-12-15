import React, { Component } from 'react';
import './SearchBox.css';
import findMovie from '../../redux/actions/action';
import store from '../../redux/reducers/store';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = () => {
        this.setState({searchLine: document.querySelector('.search-box__form-input').value })
        if(document.querySelector('.search-box__form-input').value != 0) {document.querySelector('.search-box__form-submit').disabled = false;}
        else {document.querySelector('.search-box__form-submit').disabled = true;}
        
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    searchButton = ()=>{
        var movieArr
        const asyncFetch = async () => {
            await fetch(`http://www.omdbapi.com/?s=${document.querySelector('.search-box__form-input').value}&apikey=28f6807c`)
              .then(res => { return res.json() })
              .then((data) => {
                movieArr = [...data.Search];
                console.log(movieArr);
              })
              
              store.dispatch(findMovie(movieArr));
              
            }
            asyncFetch();
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        <p>Искать фильм по названию:</p>
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={this.searchButton}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;