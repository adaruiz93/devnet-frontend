import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const DevList = (props) => {
  const [devs, setDevs] = useState([])
  //fetch for index
  const getDevs = async () => {
    try {
      const allDevs = await fetch('http://localhost:9000/devnet')
      console.log('all devs', allDevs)
      const parsed = await allDevs.json()
      console.log('parsed version', parsed)
      setDevs(parsed)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async (id) => {
    try {
      const config = {
        method: 'DELETE'
      }
      const deleteDev = await fetch(`http://localhost:9000/devnet/${id}`, config)
      const parsed = await deleteDev.json()
      const updatedDev = devs.filter(dev => dev._id !== parsed._id)
      setDevs(updatedDev)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDevs()
  }, [])

  return (
    <div>
    <main>
      <Table striped bordered hover variant="dark" className="list-table">
        <thead>
          <tr>
          <th>Name</th>
            <th>Role</th>
            <th>Company</th>
            <th>Question Type</th>
            <th>Question</th>
            <th>Details</th>
            <th>Solution</th>
            <th>Tags</th>
            <th>"YOU NEED TO LEAVE"</th>
          </tr>
        </thead>
        <tbody>
        {devs && devs.map(dev=>(
            <tr key={dev._id}>
             <td><Link to={`/devnet/${dev._id}`}>{dev.name}</Link></td>
              <td>{dev.role}</td>
              <td>{dev.company}</td>
              <td>{dev.questionType}</td>
              <td>{dev.question}</td>
              <td>{dev.details}</td>
              <td>{dev.solution}</td>
              <td>{dev.tags}</td>
              <td onClick={()=> handleDelete(dev._id)} className="delete-x">X</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to='/devnet/new'>Create New Post</Link>
      </main>
    </div>
  )
}

export default DevList
