import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
    const navigate = useNavigate();
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
        navigate(`/search/${keyword}`)
    } else {
        navigate('/')
    }
  }

  return (
    <Form  className="d-flex" onSubmit={submitHandler} >
      <Form.Control
        type="search"
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='me-2'
         
      />
      
      <Button type='submit' variant='outline-dark' className='p-2'>
        Search
        </Button>
     
    </Form>
  )
}

export default SearchBox