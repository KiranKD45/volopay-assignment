import React from 'react'
import "./home.css"
import Burner from './burner';

function Home() {
  return (
    
    <><div>
        <h1 className='heading'>Virtual Cards</h1>
        <ul className='list'>
            <li>Your</li>
            <li>All</li>
            <li>Blocked</li>
        </ul>
        <hr className='hr'/>
        <button className='button'>+ Virtual card</button>
        <button className='search-btn'>S</button>
        <button className='filter-btn'>- Filter</button>
    </div>
    <div className='home-left'>
        <Burner head="MinMax" name="Vishal" sub="Software Subscription" btn="BURNER" li1="Spent" li2="Available to Spend" exp="Expires: 9 Feb" sgd1="0 SGD" sgd2="9 SGD"  />
        <Burner head="Motion" name="Rajith" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Agust Limit : 5 SGD" sgd1="00 SGD" sgd2="15 SGD"  />
        <Burner head="Xero" name="Mayank" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 50 SGD" sgd1="0 SGD" sgd2="9 SGD"  />
    </div>
    <div className='home-right'>
    <Burner head="Xero" name="Mayank" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 50 SGD" sgd1="0 SGD" sgd2="9 SGD"  />
    <Burner head="Xero" name="Mayank" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 50 SGD" sgd1="0 SGD" sgd2="9 SGD"  />
    <Burner head="Xero" name="Mayank" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 50 SGD" sgd1="0 SGD" sgd2="9 SGD"  />
    </div>
    </>

  )
}

export default Home;