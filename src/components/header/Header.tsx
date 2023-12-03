import React from 'react'
import '../header/header.scss'
import Burger from '../header/burgerBTN/BurgerBTN'
import toggleBTN from '../header/burgerBTN/BurgerBTNtoggle.module.scss'

export default function Header() {

  return (
    <div className='header'>
      <Burger className={toggleBTN.burgerBTNopened}/>
    </div>
  )
}
