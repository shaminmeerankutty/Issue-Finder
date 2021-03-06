import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.a`
  background: none;
  border: none;
  padding: 5px;
  margin: 0 5px;
  display: inline-block;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background: #fcfcfc;
    border-radius: 100%;
  }
`;

export const ImageButton = props => (
  <Button {...props} target="_blank">
    <img className="icon" src={props.src} />
  </Button>
);
