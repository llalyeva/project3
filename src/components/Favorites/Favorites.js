import React, { Component } from 'react';
import remove from '../../redux/actions/remove';
import store from '../../redux/reducers/store';
import sendList from '../../redux/actions/sendList';
import { connect } from "react-redux";
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

    for(let i = 0; i < arr.length ; i++){
      if(arr[i].innerHTML.includes(str)) arr[i].nextElementSibling.innerHTML = 'Добавить в список'
        
        
    }
}


class Favorites extends Component {
   componentDidMount(){
    store.subscribe(()=>{
        this.setState({movies: store.getState().fav})
        serverObj.title = document.querySelector('.favorites__name').value;

        for(let i = 0; i < this.state.movies.length; i++){
         serverObj.movies.push(this.state.movies[i].imdbID)
                                                        }

         fetch('https://acb-api.algoritmika.org/api/movies/list',{
          method: 'POST',
          headers: {
                    'Content-Type': 'application/json'
                   },
          body: JSON.stringify(serverObj)
                                       })
          .then(response => response.json())
          .then(response => {return k = response.id})
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
                <input  placeholder = "Мой список" className="favorites__name" onChange={(e)=>{
                if(document.querySelectorAll('.item').length !== 0 && e.target.value.length !== 0) this.setState({disabled:false})
               
            }}/>
                <div className="favorites__list">
                    {this.state.movies.map((item) => {
                        return  <div className='item'> <p key={item.imdbID}>{item.title} ({item.year})</p>       
                                      <button className="item_but" onClick={()=>{{
                                        k = item.imdbID
                                        if(document.querySelectorAll('.item').length == 0) this.setState({disabled:true})
                                        changeText(`${item.title}`)
                                        store.dispatch(remove(k))
                                        this.setState({movies: this.state.movies.filter(item =>
                                      item.imdbID !== k)})
                                      }}}>X</button> 
                               </div>
                    })}
                </div>
                
                <div> { this.state.href ? (
                    <button type="submit" className="favorites__save" disabled = {this.state.disabled} onClick={()=>{
                        name = document.querySelector('.favorites__name').value;
                        this.props.sendList(name)
                        
                        this.setState({href: false})
                        }}>Сохранить список</button>)
                    :( <a href={`http://localhost:3000/list/${k}`} > Перейти по ссылке </a> )}
                </div>
            </div>
        );
    }
}
 
const mapDispatchToProps = dispatch => ({
    
    sendList: (name) => {dispatch(sendList(name))
        console.log("skaskas")}
    
  });


  export default connect(null, mapDispatchToProps)(Favorites);



