import React, {useEffect, useState} from 'react';
import {deleteTodo, toggleTodo} from "../../store/todos/todos-reducer";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Reorder} from "framer-motion";
import CheckButton from '../UI/CheckButton'

const Todo = (props) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if(props.todo.completed) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }, [props.todo.completed])

    const checkHandler = () => {
        dispatch(toggleTodo(props.todo.id))
    }


    return (
        <TodoContainer draggable={true}>
            <TodoInfo>
                <CheckButton checked={checked}
                             checkHandler={checkHandler}
                           type="checkbox"
                    />

                {props.todo.completed ?
                    <TodoTitleCompleted>{props.todo.title}</TodoTitleCompleted>
                    :
                    <TodoTitle>{props.todo.title}</TodoTitle>
                }

            </TodoInfo>
            <Delete type='text'
                    onClick={() => dispatch(deleteTodo(props.todo.id))}>
            </Delete>
        </TodoContainer>

    );
};

const TodoContainer = styled.li`
  padding: 16px 15px;
  width: 100%;
  font-family: Josefin Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: #CACDE8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #393A4C;
  //cursor: move;
`

const TodoInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const TodoTitle = styled.div`
  margin-left: 10px;
`

const TodoTitleCompleted = styled.div`
  margin-left: 10px;
  color: #4D5066;
  text-decoration: line-through;
`
const Delete = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: transparent;
  border: transparent;
  position: relative;
  opacity: 0.4;
  transition: opacity ease 0.2s;

  :hover {
    opacity: 1;
  }

  &:before, &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    background: #CACDE8;
    left: -5px;
  }
  
  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`
export default Todo;