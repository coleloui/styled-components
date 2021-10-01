import styled from 'styled-components'

const BasicTitle = styled.h1`
text-transform: capitalize;
text-align: center;
color: ${({special}) => special ? 'red' : 'blue'}
`
export default BasicTitle