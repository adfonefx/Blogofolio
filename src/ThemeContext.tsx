import React, { createContext, useContext, useState, ReactNode } from 'react';

   // Определяем структуру контекста темы
interface ThemeContextProps {
  theme: string;                         // theme (текущая тема)
  changeTheme: (theme: string) => void;  // changeTheme (функция для изменения темы).
}

   // Создаём контекст с помощью createContext из React. Изначально неопределен.
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

   // Интерфейс для пропсов ThemeProvider
interface ThemeProviderProps {
  children: ReactNode; // пропс, для передачи дочерних элементов компоненту
   // children, представляет собой дочерний элемент, который будет предоставлен контексте
             // ReactNode -тип данных в TypeScript, который представляет собой любое значение, 
             // которое может быть отрендерено в React
}

   //Компонент-обертка для предоставления темы всем дочерним компонентам
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
     // Состояние для хранения текущей темы
  const [theme, setTheme] = useState<string>('light');                

     // Функция для изменения темы
  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  // Предоставление значения контекста дочерним компонентам
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для использования значений контекста
export const useTheme = () => {
  const context = useContext(ThemeContext);

  // Проверяю, определён ли контекст
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};