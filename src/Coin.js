import React from 'react'

const Coin = ({ name, image, symbol, price, volume }) => {
  return (
    <div>
      <div className='row-container'>
        <div className='coin-row'>
          <div className='coin'>
            <img src={image} alt='cryptocurrency' />
            <h1 className='name'>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
          </div>
          <div className='coin-data'>
            <p className='coin-price'>${price}</p>
            <p className='coin-volume'>{volume.toLocalString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin
