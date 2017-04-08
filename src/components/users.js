import React from 'react';
import Button from './button'
import UserItem from './user-item'

class Link extends React.Component {

  constructor(props) {
    super(props)
    this.changeUrl = this.changeUrl.bind(this)
  }

  changeUrl() {
      window.location.replace(this.props.newUrl)
  }

  render() {
    return(
      <div>
        <Button
          onClick={this.changeUrl}
          buttonLabel={`Go to ${this.props.newUrl}`}
          className='btn btn-blue' />
        {this.props.children}
      </div>
    )
  }
}

class Users extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data, fetchUsers} = this.props
    return (
      <div className='container'>
        <Button onClick={fetchUsers} buttonLabel='Fetch Users' className='btn btn-blue' />
        <Link newUrl='twitter.com/eternalenvy1991'>
          <p>Envy we won</p>
        </Link>
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
