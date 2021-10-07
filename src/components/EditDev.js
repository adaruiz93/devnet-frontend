import React, {useState, useEffect} from 'react'


const EditDev = (props) => {
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
  const [loading, setLoading] = useState(true)

  const getDevs = async (id) => {
    try {
      const id = props.match.params.id
      const foundDev = await fetch(`http://localhost:9000/devnet/${id}`)
      const parsed = await foundDev.json()
      setInput(parsed)
      setLoading(false)
    } catch (err) {
      console.log(err)
      props.histoy.push('/devnet')
    }
  }

  const updateDev = async (id, data) => {
    const config = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    console.log(config)
    const updateDev = await fetch(`http://localhost:9000/devnet/${id}`, config)
    const parsed = await updateDev.json()
    props.history.push(`/devnet/${id}`)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    const {name, role, company, questionType, question, details, solution, tags} = input
    const devData = {name, role, company, questionType, question, details, solution, tags}
    updateDev(input._id, devData)
  }

  const handleChange = (e) => {
    setInput ({...input, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    getDevs()
  }, [])

  return (
    <div>
      <h1>Edit Dev</h1>
      {
        loading ? <h3>Loading...</h3> :
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' value={input.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='name'>Role</label>
            <input id='role' name='role' value={input.role} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='company'>Company</label>
            <input id='company' name='company' value={input.company} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='questionType'>Question Type</label>
            <input id='questionType' name='questionType' value={input.questionType} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='question'>Question</label>
            <input id='question' name='question' value={input.question} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='details'>Details</label>
            <input id='details' name='details' value={input.details} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='solution'>Solution</label>
            <input id='solution' name='solution' value={input.solution} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='tags'>Tags</label>
            <input id='tags' name='tags' value={input.tags} onChange={handleChange} />
          </div>
          <div>
            <input type="submit" value="edit post"/>
          </div>
        </form>
      }
    </div>
  )
}

export default EditDev