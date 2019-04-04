import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css'
import Toolbar from '../../components/Toolbar/Toolbar';
const layout = (props) => {
    return(
        <Aux> 
            <Toolbar></Toolbar>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;