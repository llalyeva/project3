import React, { Component } from 'react';
import remove from '../../redux/actions/remove';
import store from '../../redux/reducers/store';
import sendList from '../../redux/actions/sendList';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
let count = 0;

// вспомогательные переменные
let serverObj = {
    title: null,
    movies: []
}
let name;
let k;


const changeText = (str) => {
    let arr = document.querySelectorAll('.movie-item__title');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].innerHTML.includes(str)) arr[i].nextElementSibling.innerHTML = 'Добавить в список'
    }
}


class Favorites extends Component {

    CheckForButton(e){
        if(e.target.value.length !== 0 && document.querySelectorAll('.item').length !==0){
            this.setState({disabled: false})
        }
        else  this.setState({disabled: true})
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ movies: store.getState().fav,
                            disabled: store.getState().button})
            
            serverObj.title = document.querySelector('.favorites__name').value;

            for (let i = 0; i < this.state.movies.length; i++) {
                serverObj.movies.push(this.state.movies[i].imdbID)
            }

            fetch('https://acb-api.algoritmika.org/api/movies/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(serverObj)
            })
                .then(response => response.json())
                .then(response => { return k = response.id })
        })
    }

    state = {
        movies: [],
        href: true,
        disabled: true
    }
    render() {
        return (
            <div className="favorites">
                <input placeholder="Мой список" className="favorites__name"  onChange = {(e) => this.CheckForButton(e)}/>
                <div className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <div className='item'> <p key={item.imdbID}>{item.Title} ({item.Year})</p>
                            <button className="item_but" onClick={() => {
                                {
                                    k = item.imdbID
                                    changeText(`${item.Title}`)
                                    store.dispatch(remove(k))
                                  if(document.querySelectorAll('.item').length == 1) this.setState({disabled: true})
                                    this.setState({
                                        movies: this.state.movies.filter(item =>
                                            item.imdbID !== k)
                                    })
                                }
                            }}>X</button>
                        </div>
                    })}
                </div>

                <div> {this.state.href ? (
                    <button type="submit" className="favorites__save" disabled={this.state.disabled}
                    
                    onClick={() => {
                        name = document.querySelector('.favorites__name').value;
                        this.props.sendList(name)

                        this.setState({ href: false })
                    }}>Сохранить список</button>)
                    : (<Link to={`/list/:${k}`}> Перейти по ссылке </Link> )}
            </div>
            </div >
        );
    }
}

const mapDispatchToProps = dispatch => ({

    sendList: (name) => {
        dispatch(sendList(name))
    }

});


export default connect(null, mapDispatchToProps)(Favorites);



