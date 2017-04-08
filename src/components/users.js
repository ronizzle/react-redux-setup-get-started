import React from 'react';
import Button from './button'
import UserItem from './user-item'

class Users extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data, fetchUsers} = this.props
    return (
      <div className='container'>
        <Button onClick={fetchUsers} buttonLabel='Fetch Users' className='btn btn-blue' />
        <div id="users">
          {data.users.map((user, i) => {
                return (
                   <UserItem key={i} user={user} />
                )
          })}
        </div>
      </div>
    )
  }
}

export default Users
