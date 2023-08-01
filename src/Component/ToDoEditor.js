import React from 'react';
import { styled } from 'styled-components';

const ToDoTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 0.875rem;
  h4 {
    font-weight: 600;
    font-size: 18px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 85%;
    border: 2px solid #ffacac;
    padding: 0.5rem 0.5rem;
    border-radius: 0.4rem;
    font-size: 16px;
    outline: none;
    background-color: transparent;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  background-color: #ffacac;
  font-size: 1rem;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

function ToDoEditor() {
  return (
    <ToDoTitle>
      <h4>Write a ToDo ✍🏻</h4>
      <InputWrapper>
        <input type='text' placeholder='New ToDo...' />
        <Button>+</Button>
      </InputWrapper>
    </ToDoTitle>
  );
}

export default ToDoEditor;
