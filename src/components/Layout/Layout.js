import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css'
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    toggleMenuHandler = () => {
        let isMenuOpened = this.state.showSideDrawer;
        this.setState({
            showSideDrawer: !isMenuOpened
        });
    }

    render(){
        return(
            <Aux> 
                <Toolbar menuOpened={this.toggleMenuHandler}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;