import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { render } from 'react-dom';
import Customer from './components/Customer'; 

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
}]

export default class App extends Component {
  render() {
    return (
      <div className="gray-background">
        {/*}<img src={logo} lat="logo" /> */}
        <h2>management system</h2>
        {
          customers.map(c =>{
            return (
              <Customer 
                kye = {c.id}
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
         {/* <Customer 
          id= {customers.id} 
          image ={customers.image} 
          name={customers.name} 
          birthday={customers.birthday} 
          gender={customers.gender} 
          job={customers.job} 
          
          /> */}
          
      </div>
    );
  }
}

