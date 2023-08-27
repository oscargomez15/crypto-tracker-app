import React from 'react'
import './card.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faArrowTrendDown} from '@fortawesome/free-solid-svg-icons'

export const Card = ({image,name,symbol,price,volume,marketCap,priceChange}) => {

  return (

    <div className='coin'>
        <img src={image}/>
        {name.toLowerCase() === symbol.toLowerCase() ? (
        <p className='coin-name'>{name}</p>):
        <p className='coin-name'>{`${name} ${symbol.toUpperCase()}`}</p>}

        <div className='coin-data'>
            <p className='coin-price'>Price: ${price.toLocaleString()}</p>
            <p className='coin-volume'>Volume: ${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
                    <p className='coin-percent red'>Price Change: 
                    {priceChange.toFixed(2)}%
                    <FontAwesomeIcon icon={faArrowTrendDown} style={{color:"#f00606"}}/>
                    </p>
                ): <p className='coin-percent green'>Price Change: 
                {priceChange.toFixed(2)}%
                <FontAwesomeIcon icon={faArrowTrendUp} style={{color:'#11d811'}}/>
                </p>}
            <p className='coin-marketcap'>Market Cap: ${marketCap.toLocaleString()}</p>

        </div>
    </div>

  )
}
