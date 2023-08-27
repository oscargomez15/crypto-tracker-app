import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './App.css'
import './card.css'
import { Card } from './Card'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from './Header';

export default function App() {

const [coins, setCoins] = useState([]);
const [search, setSearch] = useState('');
const inputRef = useRef(null);


useEffect(()=>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(res => {
        setCoins(res.data)
        res.header()
    })
    .catch(error => console.log(error));
},[]);

const handleChange = (e) => {
    setSearch(e.target.value);
}

const clearSearch = (e) =>{
    inputRef.current.value = ''
    setSearch('')
}

const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='app-container'>
        <Header/>        
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text'>Search a Currency</h1>
            <form>
                <input type='text' placeholder='Search' className='coin-input' onChange={handleChange} ref={inputRef}/>
                {search.length > 0 ? <FontAwesomeIcon icon={faXmark} style={{color:'black'}} className='remove-search' onClick={clearSearch}/> : <></>}
            </form>
            </div>
            <div className='cards-collection'>
            {filteredCoins.map(coin => {
                return <Card
                key={coin.id} 
                name={coin.name} 
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
            />
            })}
            </div>
        </div>
    </div>
  )

}
