import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todos/todos-reducer";


const NewTodo = () => {

    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        if(event.target.title.value === '') {
            return console.error('Empty input')
        }
        dispatch(addTodo(event.target.title.value))
        event.target.reset();
    }

    return (
        <form onSubmit={submitHandler}>
            <Button type="submit"> </Button>
            <Input type='text' placeholder="Create a new todo" name='title' />
        </form>
    );
};

const Input = styled.input`
  z-index: 10;
  position: relative;
  padding: 16px 50px;
  width: 100%;
  background: #25273C;
  border: none;
  border-radius: 4px ;
  font-family: Josefin Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: #CACDE8;
  space: nowrap;
  
  &:focus {
   outline: none;
  }
`
const Button = styled.button`
  z-index: 15;
  position: relative;
  top: 38px;
  left: 12px;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border-radius: 100px;
  border: 2px solid #474b5e;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(#25273C, #25273C) padding-box,
    linear-gradient( #57DDFF, #C058F3) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
  }
`

export default NewTodo;