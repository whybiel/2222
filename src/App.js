import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    width:100%;
    height:100vh;
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
`

const Container = styled.div`
  width:40vw;
  height:50vh;
  border-radius:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
`
const Title = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  color: white;
  margin: 3vh 0 3vh 0; 
`
const Add = styled.button`
  width: 10vw;
  height: 5vh;
  color: white;
  font-size:2rem;
  margin: 0 0 1vh 0;
  background-color: #66cd00;
  border: 2px solid white;
  border-radius: 20px;
  display: block;
`
const Sub = styled.button`
  width: 10vw;
  height: 5vh;
  color: white;
  font-size:2rem;
  margin: 0 0 1vh 0;
  background-color: #ee0000;
  border: 2px solid white;
  border-radius: 20px;
  display: block; 
`

export default class App extends React.Component {
  state = {
    number: 0
  };

  add = () => {
    this.setState({
      number:
        this.state.number === 10
          ? (this.state.number = 10)
          : this.state.number + 1
    });
  };

  rem = () => {
    this.setState({
      number:
        this.state.number === 0
          ? (this.state.number = 0)
          : this.state.number - 1
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle/>
        <Add onClick={this.add}>
          +
        </Add>
        <Title>{this.state.number}</Title>
        <Sub onClick={this.rem}>
          -
        </Sub>
      </Container>
    );
  }
}


