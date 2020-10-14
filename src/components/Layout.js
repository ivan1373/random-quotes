import React from 'react'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper} from '@material-ui/core';

// Components
import Quote from './Quote'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#396afc',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #396afc, #2948ff)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #396afc, #2948ff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: 'auto',
    },
    container: {
        position: 'relative',
        top: '15%',
        bottom: '0',
        left: '0',
        right: '0',
        width: '75%',
    },
    paper: {
      '-webkit-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
      '-moz-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
      'box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
      paddingBottom: '24px',
      border: '1px solid #e0e0e0'
    }
  }));

const Layout = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <h1 style={{color:'white', textAlign:'center'}}>Random Quote App</h1>
                <Paper className={classes.paper}><Quote /></Paper>
            </Container>
        </div>
        
    )
}

export default Layout
