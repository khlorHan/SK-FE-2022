import { createContext, useState, useMemo, useContext } from 'react';

export const colors = {
  white: '#fff',
  black: '#000',
  red: {
    100: 'hsl(0, 84%, 90%)',
    200: 'hsl(0, 84%, 80%)',
    300: 'hsl(0, 84%, 70%)',
    400: 'hsl(0, 84%, 60%)',
    500: 'hsl(0, 84%, 50%)',
    600: 'hsl(0, 84%, 40%)',
    700: 'hsl(0, 84%, 30%)',
    800: 'hsl(0, 84%, 20%)',
    900: 'hsl(0, 84%, 10%)',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({
  theme: initialThemeName = 'light',
  ...restProps
}) => {
  const [currentTheme, setCurrentTheme] = useState(initialThemeName);

  const themeValue = useMemo(
    () => ({
      theme: {
        name: currentTheme,
        light: {
          fg: colors.black,
          bg: colors.white,
        },
        dark: {
          fg: colors.white,
          bg: colors.black,
        },
      },
      changeTheme: setCurrentTheme,
    }),
    [currentTheme]
  );

  return <ThemeContext.Provider value={themeValue} {...restProps} />;
};

export const useTheme = () => {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    throw new Error(
      'useTheme 훅은 ThemeProvider 래퍼 컴포넌트 안에 포함된 컴포넌트에서만 호출 가능합니다.'
    );
  }

  return contextValue;
};
