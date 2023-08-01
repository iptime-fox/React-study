import React from 'react';
import { styled } from 'styled-components';

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

function TodoItems({ id, content, isDone, createdDate, onUpdate, onDelete }) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <ToDoItem>
      <CheckBox>
        <input type='checkbox' checked={isDone} onChange={onChangeCheckBox} />
      </CheckBox>
      <ToDoText>{content}</ToDoText>
      <ListDate>{new Date(createdDate).toLocaleDateString()}</ListDate>
      <DelBtn>
        <button onClick={onClickDelete}>🗑️</button>
      </DelBtn>
    </ToDoItem>
  );
}

export default TodoItems;
