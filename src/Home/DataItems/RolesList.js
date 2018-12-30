import React from 'react';

const roles = [
    { id: 1 , name: 'Admin'}, 
    { id: 2 , name: 'Editor' }, 
    { id: 3 , name: 'Viewer' }
];

function RoleList(props) {
    const ItemList = props.roles.map((role) =>
      <option key={role.id} value={role.name}> {role.name} </option>
    );
    return (
        ItemList
    );
}

export default class RolesList extends React.Component {
    render() {
        return (
            <RoleList roles={roles} />
        );
    };
}