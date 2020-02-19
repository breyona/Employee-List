import React, { useState, useEffect } from 'react';
import { Form, Label, Input, Button } from 'reactstrap'


const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <Form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <Label>First Name</Label>
      <Input type="text" name="name" value ={user.name} onChange={handleInputChange} />
      <Label>Last Name</Label>
      <Input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} />
      <Label>Username</Label>
      <Input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <Label>Job Title</Label>
      <Input type="text" name="jobtitle" value={user.jobtitle} onChange={handleInputChange} />
      <Button>Update user</Button>
      <Button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </Button>
    </Form>
  )
}

export default EditUserForm