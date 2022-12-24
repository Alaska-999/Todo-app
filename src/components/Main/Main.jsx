import React from 'react';
import styled from "styled-components";
import {Container} from "../UI/Container";
import NewTodo from "../Todos/NewTodo";
import TodoList from "../Todos/TodoList";
import Footer from "../Footer/Footer";


const Main = () => {

    return (
        <div>
            <Container>
                <Header>TODO</Header>
                <NewTodo/>
                <TodoPanel>
                    <TodoList/>
                    <Footer/>
                </TodoPanel>
            </Container>
        </div>
    );
};


const Header = styled.h1`
  z-index: 10;
  font-family: "Josefin Sans";
  font-size: 35px;
  letter-spacing: 12px;
  color: white;
  position: relative;
  margin-bottom: 10px;
`

const TodoPanel = styled.div`
  background: #25273C;
  border: none;
  border-radius: 4px;
  position: relative;
  z-index: 20;

`

export default Main;