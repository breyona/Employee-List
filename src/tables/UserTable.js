import React from 'react'
import { Table, Button } from 'reactstrap'


const UserTable = props => (
  <Table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>JobTitle</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.username}</td>
            <td>{user.jobtitle}</td>
            <td>
              <Button  
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </Button>
              <Button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6}>No Users</td>
        </tr>
      )}
    </tbody>
  </Table>
)

export default UserTable