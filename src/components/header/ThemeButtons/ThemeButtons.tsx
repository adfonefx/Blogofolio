import { DarkIcon } from './ThemeIcons/DarkIcon';
import { LightIcon } from './ThemeIcons/LightIcon';
import { useTheme } from '../../../ThemeContext'
import styles from './ThemeButtons.module.scss'

const ThemeButtons: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={styles.buttons}>

      <button onClick={() => changeTheme('light')} disabled={theme === 'light'}>
        <LightIcon disabled={theme !== 'light'} />
      </button>

      <button onClick={() => changeTheme('dark')} disabled={theme !== 'light'}>
        <DarkIcon disabled={theme === 'light'} />
      </button>

    </div>
  );
};

export default ThemeButtons;
