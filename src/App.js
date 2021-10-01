import styled from 'styled-components'
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons';
import { ComplexTitle } from './components/ComplexTitle';
import { Random } from './components/Random';

function App() {
  return (
    <>
    <BasicTitle special>Syled Component</BasicTitle>
    <ComplexTitle title="more complex title" />
    <BasicTitle >Syled Component</BasicTitle>
    <Random />
    <DefaultButton >Click Me</DefaultButton>
    <HipsterButton>Click Me</HipsterButton>
    </>
  );
}

export default App;
