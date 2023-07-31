import { styled } from 'styled-components';
import Header from './Component/Header';
import ToDoEditor from './Component/ToDoEditor';
import ToDoList from './Component/ToDoList';

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
  return (
    <Wrapper>
      <Header />
      <ToDoEditor />
      <ToDoList />
    </Wrapper>
  );
}

export default App;
