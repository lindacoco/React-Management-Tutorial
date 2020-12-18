import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { render } from 'react-dom';
import Customer from './components/Customer'; 
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme =>( {
    root: {
      width: '100%' ,
      marginTop : theme.spacing.unit *3 ,
      overflowX: 'auto'
    },
    table: {
      minWidth: 1080
    }

})

const customers = [{
  'id':1, 
  'image':'http://placeimg.com/64/64/any',
  'name': 'jamie', 
  'birthday':'930221', 
  'gender':'femail',
  'job':'student'
},
{
'id':2, 
  'image':'http://placeimg.com/64/64/any',
  'name': 'rara', 
  'birthday':'990221', 
  'gender':'femail',
  'job':'student'
},
{
  'id':3, 
  'image':'http://placeimg.com/64/64/any',
  'name': 'roy', 
  'birthday':'950221', 
  'gender':'mail',
  'job':'student'
}];

class App extends Component {
  render() {

    const {classes} = this.props;

    return (
      <Paper className={classes.root}>
        {/*}<img src={logo} lat="logo" /> */}
        <h2>management system</h2>
        <Table className={classes.table}>
          <TableHead> 
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>img</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>job</TableCell>
            </TableRow>
          </TableHead>            
          <TableBody>
          {
          customers.map(c => {
            return (
              <Customer
                key = {c.id}
                id= {c.id} 
                image ={c.image} 
                name={c.name} 
                birthday={c.birthday} 
                gender={c.gender} 
                job={c.job}  
              />
            )
          })
        }
          </TableBody>
        </Table>
        
         {/* <Customer 
          id= {customers.id} 
          image ={customers.image} 
          name={customers.name} 
          birthday={customers.birthday} 
          gender={customers.gender} 
          job={customers.job} 
          
          /> */}
          
      </Paper>
    );
  }
}

export default withStyles(styles)(App); 

