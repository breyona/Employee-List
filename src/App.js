import React, { useState, useEffect, Fragment, Sitebar } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import './App.css'
import Auth from './Auth/Auth'




const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Leyona', lastname: 'Lovely', username: 'peaches', jobtitle: 'Fairy' },
		{ id: 2, name: 'Pele', lastname: 'Pesos',username: 'dough', jobtitle: 'Dentist' },
		{ id: 3, name: 'Jazzy', lastname: 'Brown',username: 'sweetandlow', jobtitle: 'Princess'},
	]

	const initialFormState = { id: null, name: '', lastname: '', username: '', jobtitle: '' }


	function App() {

		const [sessionToken, setSessionToken] = useState('')
	  
		useEffect(() => {
		  if(localStorage.getItem('token')) {
			setSessionToken(localStorage.getItem('token'))
		  }
		}, [])
	  
		const clearToken = () =>{
		  localStorage.clear()
		  setSessionToken('')
		}
	  
		const updateToken = (newToken) => {
		  localStorage.setItem('token', newToken)
		  setSessionToken(newToken)
		  console.log(newToken)
		}
	  
		const protectedViews = () => {
		  return (localStorage.getItem('token') === sessionToken ? <AddUserForm token={sessionToken} /> : <Auth updateToken={updateToken} />)
		}
	  
		return (
		  <div className="App">
			<Sitebar clickLogout={clearToken} />
			{protectedViews()}
		  </div>
		);
	  }
	  
	 

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, lastname: user.lastname, username: user.username, jobtitle: user.jobtitle })
	}

	return (
		<div><Auth/></div>
		// <div className="container">
			
		// 	<h1> Orientation Employee Database Login</h1>
		// 	<p>**Please print and scan a copy of Orientation Login Form for mgmt approval.**</p>
		// 	<div className="flex-row">
		// 		<div className="flex-large">
		// 			{editing ? (
		// 				<Fragment>
		// 					<h2>Edit User</h2>
		// 					<EditUserForm
		// 						editing={editing}
		// 						setEditing={setEditing}
		// 						currentUser={currentUser}
		// 						updateUser={updateUser}
		// 					/>
		// 				</Fragment>
		// 			) : (
		// 				<Fragment>
		// 					<h2>Add User</h2>
		// 					<AddUserForm addUser={addUser} />
		// 				</Fragment>
		// 			)}
		// 		</div>
		// 		<div className="flex-large">
		// 			<h2>View Users</h2>
		// 			<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
		// 		</div>
		// 	</div>
		// </div>
	)
					}

	
		  
		  


		  

export default App





