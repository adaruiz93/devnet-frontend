import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      <table>
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
          </tr>
        </thead>
        <tbody>
          {devs && devs.map(dev=>(
            <tr key={dev._id}>
             <td><Link to={`/devnet/${dev._id}`}>{dev.name}</Link></td>
              <td>{dev.name}</td>
              <td>{dev.role}</td>
              <td>{dev.company}</td>
              <td>{dev.questionType}</td>
              <td>{dev.question}</td>
              <td>{dev.details}</td>
              <td>{dev.solution}</td>
              <td>{dev.tags}</td>
              <td onClick={()=> handleDelete(dev._id)}>X</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/devnet/new'>Create New Post</Link>
    </div>
  )
}

export default DevList