import { styled } from 'styled-components';
import Header from './Component/Header';
import ToDoEditor from './Component/ToDoEditor';
import ToDoList from './Component/ToDoList';
import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { Helmet } from 'react-helmet';
import TestComp from './Component/TestComp';

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  padding: 4rem;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': {
      return [action.newItem, ...state];
    }
    case 'UPDATE': {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              isDone: !it.isDone,
            }
          : it
      );
    }
    case 'DELETE': {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  const [toDo, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  }, []);
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  }, []);
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onDelete, onUpdate };
  }, [onUpdate, onDelete]);
  return (
    <Wrapper>
      <Helmet>
        <title>ToDo</title>
      </Helmet>
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={toDo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <ToDoEditor />
          <ToDoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </Wrapper>
  );
}

export default App;
