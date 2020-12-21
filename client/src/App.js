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

class App extends Component {
    //접속 후 고객의 요청에 따라 
    state = {
     customers:""
    }
    //api에 접근해서 데이터를 가져오는 것은 componentDidMount에서 가능
    componentDidMount(){
      this.callApi()
       .then(res => this.setState({customers : res}))
       .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('api/customers'); //우리 시험용, 실제로는 주소 사용 
      const body = await response.json(); //json형태로 바디에 담아준다. 
      return body;
    }
   

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
           this.state.customers? this.state.customers.map(c => {
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
          }): "" }
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

