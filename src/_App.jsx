// import './App.css';
import ImageGrid from './routes/ImageGrid';
import TodoList from './routes/TodoList';
import RB from './routes/RB';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
    loader: () => {
      console.log('Counter router loader func is called');
      return 5;
    }
  },
  {
    path: "/imagegrid",
    element: <ImageGrid />,
    loader: async ({ params }) => {
      return fetch("https://picsum.photos/v2/list?page=6&limit=16");
    }
  },
  {
    path: "/rb",
    element: <RB />
  },

]);

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={} href="/">Todos</Nav.Link>
              <Nav.Link  href="/imagegrid">Photos</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
