import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

const DevDetails = (props) => {
  const currentId = props.match.params.id
  const [devs, setDevs] = useState([])
  const [loading, setLoading] =useState(true)
  const getDevs = async(id) => {
    const foundDev = await fetch(`http://localhost:9000/devnet/${id}`)
    const parsed = await foundDev.json()
    setDevs(parsed)
    setLoading(false)
  }
  useEffect(() => {
    getDevs(currentId)
  })

  return (
    <>
    {
      loading ? <h3>Loading...</h3> :
        <div>
          <h1>Dev Details For {devs.name}</h1>
          <Card
            bg='dark'
            text='white'
            style={{ width: '50rem' }}
            className="card-for-details"
          >
            <Card.Body>
              <div className="card-header">
                <Card.Title>{devs.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{devs.role}</Card.Subtitle>
              </div>
              <Card.Text>
                <strong>Company:</strong>: {devs.company}
              </Card.Text>
              <Card.Text>
                <strong>{devs.questionType}</strong>: {devs.question}
              </Card.Text>
              <Card.Text>
                <strong>Solution:</strong>: {devs.solution}
              </Card.Text>
              <Card.Text>
                <strong>Comments / Concerns:</strong>: {devs.details}
              </Card.Text>
              <Card.Text>
                <strong>{devs.tags}</strong> 
              </Card.Text>
              <Card.Link href='/devnet'>Back</Card.Link>
              <Card.Link href={`/devnet/${devs._id}/edit`}>Edit</Card.Link>
            </Card.Body>
          </Card>
        </div>
    }
    </>
  )
}

export default DevDetails
