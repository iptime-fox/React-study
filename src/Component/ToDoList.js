import React, { useState } from 'react';
import { styled } from 'styled-components';
import TodoItems from './ToDoItem';

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

function ToDoList({ toDo, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ''
      ? toDo
      : toDo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  return (
    <ToDoTitle>
      <h4>ToDo List 📋</h4>
      <input
        type='text'
        placeholder='Search a keyword...'
        value={search}
        onChange={onChangeSearch}
      />
      <ToDoWrapper>
        {toDo &&
          toDo.map((it) => (
            <TodoItems
              key={it.id}
              {...it}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
      </ToDoWrapper>
    </ToDoTitle>
  );
}

export default ToDoList;
