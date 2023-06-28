import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './components/posts/PostList'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <PostList/>
    </Container>
  );
}

export default App;
