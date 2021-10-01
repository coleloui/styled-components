import styled, {ThemeProvider} from 'styled-components'
import { DefaultButton } from './components/Buttons';
import GlobalStyles from './global-styles';
import { useState } from 'react';

const BaseTheme = {
  color: '#222',
  background: '#fff'
}

const DarkTheme = {
  color: '#fff',
  background: '#222'
}

const Container = styled.div`
color: ${({theme}) => theme.color};
background: ${({theme}) => theme.background};
`

function App() {
  const [baseTheme, setTheme] = useState(true)
  const toggleTheme = () => {
    setTheme(!baseTheme)
  }
  return (
    <ThemeProvider theme={baseTheme === true ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>Hello World</h1>
        <DefaultButton onClick={toggleTheme}>Toggle Me</DefaultButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
