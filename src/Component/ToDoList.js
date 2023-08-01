import React from 'react';
import { styled } from 'styled-components';

const ToDoTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 0.875rem;
  margin-top: 1rem;
  h4 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
  input {
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #ffacac;
    padding-bottom: 0.5rem;
    outline: none;
    font-size: 16px;
  }
`;

const ToDoWrapper = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 0.875rem;
  width: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ToDoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ffacac;
`;

const CheckBox = styled.div`
  width: 20px;
`;

const ToDoText = styled.div`
  flex: 1;
`;

const ListDate = styled.div`
  font-size: 14px;
  color: #999;
`;

const DelBtn = styled.div`
  button {
    cursor: pointer;
    font-size: 14px;
    border: none;
    background-color: transparent;
  }
`;

function ToDoList() {
  return (
    <ToDoTitle>
      <h4>ToDo List 📋</h4>
      <input type='text' placeholder='Search a keyword...' />
      <ToDoWrapper>
        <ToDoItem>
          <CheckBox>
            <input type='checkbox' />
          </CheckBox>
          <ToDoText>To Do</ToDoText>
          <ListDate>{new Date().toLocaleDateString()}</ListDate>
          <DelBtn>
            <button>🗑️</button>
          </DelBtn>
        </ToDoItem>
        <ToDoItem>
          <CheckBox>
            <input type='checkbox' />
          </CheckBox>
          <ToDoText>To Do</ToDoText>
          <ListDate>{new Date().toLocaleDateString()}</ListDate>
          <DelBtn>
            <button>🗑️</button>
          </DelBtn>
        </ToDoItem>
        <ToDoItem>
          <CheckBox>
            <input type='checkbox' />
          </CheckBox>
          <ToDoText>To Do</ToDoText>
          <ListDate>{new Date().toLocaleDateString()}</ListDate>
          <DelBtn>
            <button>🗑️</button>
          </DelBtn>
        </ToDoItem>
      </ToDoWrapper>
    </ToDoTitle>
  );
}

export default ToDoList;
