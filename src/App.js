import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'
function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
      })
      .catch((error) => console.log(error))
  }, [])
  console.log(coins)
  const handlechange = (e) => {
    setSearch(e.target.value)
  }
  const filtercoins = coins.filter((coin) => {
    coin.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className='App'>
      <h1 className='coin-text'>Search for coin</h1>
      <form>
        <input type='text' className='coin-input' onchange={handlechange} />
      </form>
      {filtercoins.map((coin) => {
        const { id, image, symbol, name, price, market_cap } = coin
        return (
          <Coin
            key={id}
            name={name}
            price={price}
            volume={market_cap}
            image={image}
            symbol={symbol}
          />
        )
      })}
    </div>
  )
}

export default App
