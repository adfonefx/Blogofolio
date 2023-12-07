import React, { useState } from 'react';
import toggleBTN from './BurgerBTNtoggle.module.scss';
import menuBTN from './BurgerMenu.module.scss'
import { useTheme } from '../../../ThemeContext'
import ThemeButtons from '../ThemeButtons/ThemeButtons'

interface BurgerProps {
  className?: string;
}

const NavMenu: React.FC<BurgerProps> = ({ className }) => {
  const { theme } = useTheme();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpened((state) => !state)}
        className={isOpened ? toggleBTN.burgerBTNopened : toggleBTN.burgerBTNclosed}
      >
        <span></span>
      </button>
      <div className={isOpened ? menuBTN.menu : menuBTN.menuClosed}>
        <div className={menuBTN.top}>{theme}</div>
        <div className={menuBTN.bottom}>
            <ThemeButtons />
            <div className={menuBTN.sign}>SIGN IN</div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;

