import { useThemeContext } from '../context/ThemeContext';

const useThemeSwitcher = () => {
	const { theme, setTheme, toggleTheme } = useThemeContext();
	return [theme, setTheme, toggleTheme];
};

export default useThemeSwitcher;
