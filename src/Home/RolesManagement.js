import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, Table } from './../../node_modules/reactstrap';
import './HomeStyles.css';

import UsersList from './DataItems/UsersList';
import ProjectsList from './DataItems/ProjectsList';
import RolesList from './DataItems/RolesList';


const data = { user: '', role: '', project: '', rows: [] };

const Rows = (data) => {
    if(data.data.user != undefined && data.data.user != '') {
        return (
            <tr>
                <td>{data.data.user}</td>				
                <td>{data.data.role}</td>				
                <td>{data.data.project}</td>
            </tr>
        );
    }
    else {
        return (
            <tr>
                <td></td> 
                <td> No data found </td> 
                <td></td>
            </tr>
        );
    }
}

class RolesManagement extends Component {
    constructor(props) {
        super(props);
        this.state = { user: 'John Doe', role: 'Admin', project: 'Trip to space', rows: [] };
        
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeProject = this.onChangeProject.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeUser(e) {
        var options = e.target.options;
        var user = [];
            for (let i = 0, len = options.length; i < len; i++) {
                if (options[i].selected) {
                    user.push(options[i].value);
                }
            }   
        this.setState({user: user });
    }
    onChangeRole(e) {   
        var options = e.target.options;
        var role = [];
            for (let i = 0, len = options.length; i < len; i++) {
                if (options[i].selected) {
                    role.push(options[i].value);
                }
            }
        this.setState({role: role });
    }
    onChangeProject(e) {   
        var options = e.target.options;
        var project = [];
            for (let i = 0, len = options.length; i < len; i++) {
                if (options[i].selected) {
                    project.push(options[i].value);
                }
            }
        this.setState({project: project });
    }
    handleSubmit(e) {
        e.preventDefault(); 
        //this.addRow();

        alert('You have choose: ' + this.state.user + ' with role ' + this.state.role + ' in ' + this.state.project);
        console.log('You have choose: ' + this.state.user + ' with role ' + this.state.role + ' in ' + this.state.project);
    }

    addRow() {        
        const newUserVal = this.state.user;
        const newRoleVal = this.state.role;
        const newProjectVal = this.state.project;     

        this.data = { user: newUserVal, role: newRoleVal, project: newProjectVal }
        this.state.rows.push(this.data);
        console.log(this.state.rows);
    }

    render() {
        return (
        <div className="backg-container scrollbar" id="style-sc">
            <div className="container pt-3">
                <h2>Select Roles</h2>    
                <Form onSubmit={this.handleSubmit}>
                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="user">User Name</Label>
                            <Input type="select" name="user" id="user" value={this.state.user} onChange={this.onChangeUser}>
                                <UsersList />
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="role">Role</Label>
                            <Input type="select" name="role" id="role" value={this.state.role} onChange={this.onChangeRole}>
                                <RolesList />
                            </Input>
                        </FormGroup>
                    </Col>
                    </Row>
                    <FormGroup>
                        <Label for="project">Project Name</Label>
                        <Input type="select" name="project" id="project" value={this.state.project} onChange={this.onChangeProject}>
                            <ProjectsList />  
                        </Input>
                    </FormGroup>

                    <Button outline color="info" inClick={this.addRow()}>Select</Button>                
                </Form>

                <section className="usersList">
                    <h3>Our Projects</h3>
                    <div className="mt-4">
                        <p>In Progress:</p>
                        <Row className="card-text-color">
                            <Col sm="4">
                                <Card body>
                                <CardTitle>Mark Otto - CityTech</CardTitle>
                                <CardText>Future of the world will be determined by this development.</CardText>
                                <Button outline color="info">Read More</Button>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card body>
                                <CardTitle>Larry the Bird - OmeletteTech</CardTitle>
                                <CardText>A social network with the best flavor. So... Come and try it! </CardText>
                                <Button outline color="info">Read More</Button>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card body>
                                <CardTitle>Julie Jellybean - TechBanks</CardTitle>
                                <CardText>The banking world of the future. The money of the future.</CardText>
                                <Button outline color="info">Read More</Button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-4 pb-3" id="comingSoon">
                        <p>Comming Soon:</p>
                        <div class="table-responsive">
                            <Table className="table-color table">
                                <thead>
                                    <tr>
                                        <th>UserName</th>
                                        <th>Role</th>
                                        <th>Project</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.rows.map(row => (
                                            <Rows data = {row}/>
                                        )) 
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section>
        
            </div>   
        </div>     
        );
    }
}
export default RolesManagement

/*
   <Rows data = {this.state}/>

   const ItemList = this.state.rows.map(row => 
            <tr>
                <td >{row.user}</td>				
                <td >{row.role}</td>				
                <td >{row.project}</td>
            </tr>
        );
        return (
            ItemList
        );
*/