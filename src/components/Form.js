import React from 'react'
import styled, {css} from 'styled-components/macro'

const Button = styled.button.attrs(({type}) => {
    return {type:type || 'button'}
})`
background: var(--primary);
border: none;
color: white;
padding: 0.25rem;
cursor: pointer;
${({type})=>{
    return type === 'submit' && css`
    display:block;
    width:100%;
    margin-top: 1rem;
    border-radius: 0.25rem
    `
}}
`

const BasicInput = styled.input.attrs(({type, placeholder}) => {
    return { type: type || 'text', placeholder: placeholder || 'please enter value'}
})`
box-sizing: border-box;
padding:0.5rem;
border:2px solid #f2f4f8;
border-radius:0.25rem;
width:100%;
margin-top:1rem;
`


const Form = () => {
    return (
        <div>
            <h2>Some shit</h2>
            <Button>Click Me</Button>
            <form css={`width:300px; background:#fff; padding:2rem; margin-top: 1rem;`}>
            <h2>Form</h2>
            <BasicInput />
            <BasicInput type='email' />
            <BasicInput type='text' />
            <Button type="submit">Submit Here</Button>
            </form>
        </div>
    )
}

export default Form
