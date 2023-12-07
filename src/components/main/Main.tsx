import React from 'react';
import styles from './main.module.scss';
import { useTheme } from '../../ThemeContext'

export default function Main() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.pageTheme} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
    </div>
  );
}
