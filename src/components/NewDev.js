import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Navbar, Container, Nav } from 'react-bootstrap';


const NewDev = (props) => {
  const initialState = {
    name: '',
    role: '',
    company: '',
    questionType: '',
    question: '',
    details: '',
    solution: '',
    tags: ''
  }

  const [input, setInput] = useState(initialState)
  const handleChange = (e) => {
    setInput({...input, [e.target.id]: e.target.value})
  }

  const newDev = async(data) => {
    console.log('newDev')
    try {
      const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const createdDev = await fetch('http://localhost:9000/devnet', config)
      const parsed = await createdDev.json()
      props.history.push('/devnet')
    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(initialState)
    newDev(input)
  }

  return (
    <div class="new-form">

      <form onSubmit = {handleSubmit}>
        <label htmlFor = "name">Name:</label>
        <input id = "name" name = "name" value = {input.name} onChange = {handleChange} />

        <label htmlFor = "role">Role:</label>
        <input id = "role" name = "role" value = {input.role} onChange = {handleChange} />

        <label htmlFor = "company">Company:</label>
        <input id = "company" name = "company" value = {input.company} onChange = {handleChange} />

        <label htmlFor = "questionType">Behavioral or Technical:</label>
        <input id = "questionType" name = "questionType" value = {input.questionType} onChange = {handleChange} />

        <label htmlFor = "question">Question:</label>
        <input id = "question" name = "question" value = {input.question} onChange = {handleChange} />

        <label htmlFor = "details">Details:</label>
        <input id = "details" name = "details" value = {input.details} onChange = {handleChange} />

        <label htmlFor = "solution">Solution:</label>
        <input id = "solution" name = "solution" value = {input.solution} onChange = {handleChange} />

        <label htmlFor = "tags">Tags:</label>
        <input id = "tags" name = "tags" value = {input.tags} onChange = {handleChange} />

        <input type = 'submit' value = 'Create A Post' />
      </form>
      <Link to = '/devnet'>View Posts</Link>


    </div>
  )
}


export default NewDev
