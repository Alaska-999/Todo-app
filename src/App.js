import './App.css';
import styled from "styled-components";
import image from './images/bg-desktop-dark.jpg'
import Main from "./components/Main/Main";

const App = () => {
    return (
        <AppWrapper>
            <AppImage src={image}/>
            <Main/>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  background: #161722;
`

const AppImage = styled.img`
  width: 100%;
  height: 38vh;
  min-height: 220px;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`

export default App;

