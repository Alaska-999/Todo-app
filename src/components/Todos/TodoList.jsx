import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import Todo from "./Todo";
import {selectVisibleTodos} from "../../store/todos/todos-selectors";
import {useParams} from "react-router-dom";

const TodoList = () => {
    const {filter} = useParams()
    const dispatch = useDispatch()
    const todoList = useSelector(state => selectVisibleTodos(state, filter))

    return (

        <List>
            {todoList.map(todo => (
                <Todo key={todo.id} todo={todo}/>
            ))}
        </List>


    );
};

const List = styled.ul`
  margin: 20px 0 0;
  position: relative;
  width: 100%;
  z-index: 20;
  list-style: none;
`


export default TodoList;