import React, { useState } from 'react';
import { Form, Label, Input, Button } from 'reactstrap'


const AddUserForm = props => {
	const initialFormState = { id: null, name: '', lastname: '', username: '', jobtitle: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username || !user.lastname || !user.jobtitle) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<Label>First Name</Label>
			<Input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <Label>Last Name</Label>
			<Input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} />
			<Label>Username</Label>
			<Input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<Label>JobTitle</Label>
			<Input type="text" name="jobtitle" value={user.jobtitle} onChange={handleInputChange} />
			<Button>Add New User</Button>
		</Form>
	)
}

export default AddUserForm