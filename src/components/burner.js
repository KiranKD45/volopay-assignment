import React from 'react'
import "./burnser.css"

function Burner({head,name, sub, btn,li1,li2,exp,sgd1,sgd2} ) {
  return (
    <div className='container'>
        <div className='left'>
        <h2 className='head'>{head}</h2>
        <p className='name'>{name}</p>
        <ul className='sub'>
            <li>{sub}</li>
        </ul>
        <button className='burner-btn'>{btn}</button>
        <hr/>
        <ul className='balance-1 '>
            <li>{li1}</li>
            <li>{li2}</li>
        </ul>
        </div>
        <div className='right'>
            <img src=''/>
            <p className='exp'>{exp}</p>
            <p className='SGD'>{sgd1}</p>
            <p className='SGD'>{sgd2}</p>
        </div>
    </div>
  )
}

export default Burner