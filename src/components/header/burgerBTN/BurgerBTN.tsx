import React, { useState } from 'react';
import toggleBTN from './BurgerBTNtoggle.module.scss';
import menuBTN from './BurgerMenu.module.scss'

interface BurgerProps{
    className?: string;
}

const NavMenu = ({className}: BurgerProps) => {
  const [isOpened, setIsOpened] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpened((state)=> !state)} 
      className = {isOpened ? toggleBTN.burgerBTNopened : toggleBTN.burgerBTNclosed}>
        <span></span>
      </button>
      <div className={isOpened ? menuBTN.menu : menuBTN.menuClosed}>
        <div className={menuBTN.top}>123</div>
        <div className={menuBTN.bottom}>321</div>
      </div>
    </>
  )
}

export default NavMenu

