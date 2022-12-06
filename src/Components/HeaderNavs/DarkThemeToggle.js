import styled, {ThemeProvider} from 'styled-components'
import { useSelector } from 'react-redux';

const DarkThemeProvider = ({children}) => {
    const darkTheme = useSelector(state => state.Theme.theme);
    return (
        <ThemeProvider theme={{theme: darkTheme ? 'light' : 'dark'}}>
            {children}
        </ThemeProvider>
    );
}

export default DarkThemeProvider;