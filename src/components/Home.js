import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Home = (props) => {
  return (
    <div>
      <header className="dev-home">
        <h1 className="dev-header">Welcome to DevNet</h1>
      </header>
        <main>
          <h1>A community for new developers, students, and alumni.</h1>
          <p>
            Here you can share interview questions, solutions, and other job search resources. Each contribution helps build community and offer encouragement while seeing which categories are actively being interviewed for in today's job market.
          </p>
        </main>

        <Link to = '/devnet'>View All Posts</Link>
    </div>
  )
}

export default Home;
