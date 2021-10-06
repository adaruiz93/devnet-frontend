import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

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
          <p>{devs.name}</p>
          <p>{devs.role}</p>
          <p>{devs.company}</p>
          <p>{devs.questionType}</p>
          <p>{devs.question}</p>
          <p>{devs.details}</p>
          <p>{devs.solution}</p>
          <p>{devs.tags}</p>
          <Link to = '/devnet'>Back</Link>
          <Link to = {`/devnet/${devs._id}/edit`}>Edit</Link>
        </div>
    }
    </>
  )
}

export default DevDetails
