import React, { useContext, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { TodoDispatchContext } from '../App';

const ToDoTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 0.875rem;
  margin-top: 2rem;
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
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

function ToDoEditor() {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState('');
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <ToDoTitle>
      <h4>Write a ToDo ✍🏻</h4>
      <InputWrapper>
        <input
          ref={inputRef}
          type='text'
          placeholder='New ToDo...'
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
        />
        <Button onClick={onSubmit}>+</Button>
      </InputWrapper>
    </ToDoTitle>
  );
}

export default ToDoEditor;
