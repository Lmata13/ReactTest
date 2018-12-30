import React from 'react';

const projects = [
    { id: 1, name: 'Trip to space'}, 
    { id: 2, name: 'Assembly Ikea furniture' }, 
    { id: 3, name: 'Datumize Zentral' }
];

function ProjectList(props) {
    const ItemList = props.projects.map((project) =>
      <option key={project.id} value={project.name}> {project.name} </option>
    );
    return (
        ItemList
    );
}

export default class ProjectsList extends React.Component {
    render() {
        return (
            <ProjectList projects={projects} />
        );
    };
}
