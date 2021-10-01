import styled from 'styled-components'
import { Loading } from './components/Loading';
import GlobalStyles from './global-styles';

function App() {
  return (
    <div style={{padding:'2rem'}}>
      <GlobalStyles />
      <h2>animation</h2>
      <Loading />
    </div>

  );
}

export default App;
