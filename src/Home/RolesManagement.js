import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, Table } from './../../node_modules/reactstrap';
import './HomeStyles.css';

import UsersList from './DataItems/UsersList';
import ProjectsList from './DataItems/ProjectsList';
import RolesList from './DataItems/RolesList';


class RolesManagement extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '', role: '', project: '', rows: [] };
    }
   
    onSubmit(e) {
        e.preventDefault(); 
        const obj = { user: this.state.user, role: this.state.role, project: this.state.project };
        this.setState({ rows:[ this.state.rows, obj ], user: '', role: '', project: '' });

        //alert('You have choose: ' + this.state.user + ' with role ' + this.state.role + ' in ' + this.state.project);
    }

    render() {
        return (
        <div className="backg-container scrollbar" id="style-sc">
            <div className="container pt-3">
                <h2>Select Roles</h2>    
                <Form onSubmit={this.onSubmit.bind(this)}>
                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="user">User Name</Label>
                            <Input type="select" name="user" id="user" onChange={event => this.setState({ user: event.target.value })} value={this.state.user}> 
                                <UsersList />
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="role">Role</Label>
                            <Input type="select" name="role" id="role" onChange={event => this.setState({ role: event.target.value})} value={this.state.role}> 
                                <RolesList />
                            </Input>
                        </FormGroup>
                    </Col>
                    </Row>
                    <FormGroup>
                        <Label for="project">Project Name</Label>
                        <Input type="select" name="project" id="project" onChange={event => this.setState({ project: event.target.value})} value={this.state.project}> 
                            <ProjectsList />  
                        </Input>
                    </FormGroup>

                    <Button outline color="info" ref={(ref) => this.submitInput = ref} value={this.state.input}>Select</Button>                
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
                        <div className="table-responsive">
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
                                        this.state.rows.map((data, index) => {                                            
                                           return ( 
                                                <Rows data={data} key={index} row={index}/> 
                                            )
                                        }) 
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


class Rows extends Component {
    constructor(props) {
        super(props);
        //const i = this.props.data.length + 1;
    }

    render(){
        return (
            <tr>
                <td>{this.props.data.user}</td>				
                <td>{this.props.data.role}</td>				
                <td>{this.props.data.project}</td>
            </tr>
        );
    }
}