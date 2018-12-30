import React, { Component } from 'react';

const users = [
    { id: 1, name: 'John Doe'}, 
    { id: 2, name: 'Alice' }, 
    { id: 3, name: 'Bob' }
];

function UserList(props) {
    const ItemList = props.users.map((user) =>
      <option key={user.id} value={user.name}> {user.name} </option>
    );
    return (
        ItemList
    );
}

export default class UsersList extends React.Component {
    render() {
        return (
            <UserList users={users}/>
        );
    };
}