import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {deleteCompleted} from "../../store/todos/todos-reducer";
import Filters from "./Filters";

const Footer = () => {
    const todosCount = useSelector(state => state.todosReducer.length)
    const dispatch = useDispatch()
    return (
        <FooterContainer>
            <ItemsLeft>
                {todosCount} items left
            </ItemsLeft>
            <Filters/>
            <DeleteTodos onClick={() => dispatch(deleteCompleted())}>Clear Completed</DeleteTodos>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
  z-index: 10;
  font-family: "Josefin Sans";
  font-size: 13px;
  color: #4D5066;
  position: relative;
  margin-bottom: 10px;
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;

`

const ItemsLeft = styled.div`

`

const DeleteTodos = styled.button`
  background: transparent;
  border: none;
  font-family: "Josefin Sans";
  font-size: 13px;
  color: #4D5066;
  cursor: pointer;
  transition: color ease 0.2s;

  &:hover {
    color: #CACDE8;
  }
`

export default Footer;