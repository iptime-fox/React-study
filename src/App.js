import { styled } from 'styled-components';
import Header from './Component/Header';
import ToDoEditor from './Component/ToDoEditor';
import ToDoList from './Component/ToDoList';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

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

function App() {
  const [toDo, setToDo] = useState([]);
  const idRef = useRef(0);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setToDo([newItem, ...toDo]);
    idRef.current += 1;
  };
  const onUpdate = (targetId) => {
    setToDo(
      toDo.map((it) =>
        it.id === targetId
          ? {
              ...it,
              isDone: !it.isDone,
            }
          : it
      )
    );
  };
  const onDelete = (targetId) => {
    setToDo(toDo.filter((it) => it.id !== targetId));
  };
  return (
    <Wrapper>
      <Helmet>
        <title>ToDo</title>
      </Helmet>
      <Header />
      <ToDoEditor onCreate={onCreate} />
      <ToDoList toDo={toDo} onUpdate={onUpdate} onDelete={onDelete} />
    </Wrapper>
  );
}

export default App;
