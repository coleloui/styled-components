import styled, {keyframes} from 'styled-components';
import { setupBorder } from '../utils';

const spinner = keyframes`
to{
    transform: rotate(360deg);
}
`

export const Loading = styled.div`
width: 6rem;
height: 6rem;
border: ${setupBorder({width: 5, type:'solid', color: '#ccc'})};
border-radius: 50%;
border-top-color: var(--primary);
animation: ${spinner} 0.6s linear infinite;
`