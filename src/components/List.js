import React from 'react'
import styled, {css} from 'styled-components'

const fruits = ['orange', 'apple', 'banana', 'peach']

const Item = styled.li`
list-style-type: none;
`

const List = () => {
    return (
        <ul>
         {fruits.map((item, index) => {
             return <Item key={index} odd={(index+1 %2 !== 0)}>{item}</Item>
         })}
        </ul>
    )
}

export default List
