import React from 'react'
import "./home.css"
import Burner from './burner';
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <><div>
        <h1 className='heading'>Virtual Cards</h1>
        <ul className='list'>
            <Link to="/your"><li>Your</li></Link>
            <Link to="/"><li>All</li></Link>
            <Link to="/blocked"><li>Blocked</li></Link>
        </ul>
        <hr className='hr'/>
        <button className='button'>+ Virtual card</button>
        <input type='search' className='search-btn' placeholder='S'/>
        <button className='filter-btn'>- Filter</button>
    </div>
    <div className='home-left'>
        <Burner head="MinMax" name="Vishal" sub="Software Subscription" btn="BURNER" li1="Spent" li2="Available to Spend" exp="Expires: 9 Feb" sgd1="0 SGD" sgd2="9 SGD"/>
        <Burner head="Motion" name="Rajith" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Agust Limit : 5 SGD" sgd1="00 SGD" sgd2="15 SGD"  />
        <Burner head="Xero" name="Mayank" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 50 SGD" sgd1="0 SGD" sgd2="9 SGD"  />
    </div>
    <div className='home-right'>
    <Burner head="Quicknooks" name="Rajesh" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 10 SGD" sgd1="0 SGD" sgd2="1 SGD"  />
    <Burner head="pandadoc" name="Mayank" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 180 SGD" sgd1="00 SGD" sgd2="18 SGD"  />
    <Burner head="Mokambika" name="Rajith" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 20 SGD" sgd1="00 SGD" sgd2="45 SGD"  />
    </div>
    </>

  )
}

export default Home;