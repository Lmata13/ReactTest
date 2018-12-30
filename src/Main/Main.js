import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import RolesManagement from '../Home/RolesManagement';

let imgUrl = 'https://www.onx.com/wp-content/uploads/2014/09/ThinkstockPhotos-537331536.jpg'; 
let backgroundStyle = {
    color: 'white',
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    position: 'absolute',
    height: '100%',
    left: '0',
    right: '0',
    top: '0',
    zIndex: '1',
    overflow: 'hidden'
};

const Main = () => (
    <main>
        <div style={backgroundStyle}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/rolesManagement' component={RolesManagement}/>
            </Switch>
        </div>
    </main>
)
export default Main
