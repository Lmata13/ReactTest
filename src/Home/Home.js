import React from 'react';
import './HomeStyles.css';

import { Link } from 'react-router-dom';
import { Jumbotron, Button } from './../../node_modules/reactstrap';

const Home = () => (
        <Jumbotron className="block-container">
            <h1 className="display-3">Welcome User!</h1>
            <p className="lead">This is a simple App, to do a Test for Datumize. </p>
            <hr className="my-2" />
            <p>It uses React, Redux, and some Bootstrap Components (like this 'jumbotron')... :)</p>
            <p className="lead">
                <Link className="" to='/RolesManagement'><Button outline color="info"> Come In! </Button></Link>
            </p>
        </Jumbotron>
)
export default Home
