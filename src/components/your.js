import React from 'react'
import "./home.css"
import Burner from './burner';
import { Link } from 'react-router-dom';

function Your() {
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
        <Burner head="Mokambika" name="Rajith" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Aug Limit: 20 SGD" sgd1="00 SGD" sgd2="45 SGD"  />
        <Burner head="Motion" name="Rajith" sub="Software Subscription" btn="SUBSCRIPTION" li1="Spent" li2="Available to Spend" exp="Agust Limit : 5 SGD" sgd1="00 SGD" sgd2="15 SGD"  />
        </div>
        </>
        )
}

export default Your;