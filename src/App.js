import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Skyler Tosh',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render () {
    return (
        <Router>
          <Container className="p-0" fluid={true}>

            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Skyler Tosh</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Footer></Footer>

          </Container>
        </Router>
      );
  }
}

export default App;
