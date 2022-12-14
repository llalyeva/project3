import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Header />
                <div className="main-page__content">
                  <div className='search_fav'>
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                    <aside className="main-page__favorites">
                        <Favorites />
                    </aside>
                    </div>
                        <div className="main-page__movies">
                            <Movies />
                        </div>
                </div>
            </div>
        );
    }
}
 
export default MainPage;