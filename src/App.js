import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters.jsx';
import './App.css';
import { render } from 'react-dom';

class App extends Component{
  state = { 
    counters: [
        {id: 1, value:4},
        {id: 2, value:0},
        {id: 3, value:0},
        {id: 4, value:0}
    ]
 };
  constructor(props) {
    super(props);
    console.log('App - Constructor');
    // this.state = 
  }

  componentDidMount(){
    // Ajax Call
    console.log('App- Mounted');
  }
 
 handleDelete = (counterId) =>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
 };
 handleReset = () =>{
     const counters = this.state.counters.map(c => {
         c.value = 0;
        return c;
     });
     this.setState({counters});
 };
 handleIncrement = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] ={...counter};
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({counters});
 }
 handleDecrease = (counter) =>{
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = {...counter};
  //  if(counters == 0) return 
   counters[index].value--;
   console.log(this.state.counters[index]);
   this.setState({counters});
 }
 render() {
   console.log("App - rendered");
  return (
    <div>
    <NavBar 
      totalCounters={this.state.counters.filter(c => c.value > 0).length}
    />
    <main className="container">
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDecrease={this.handleDecrease}
      onDelete={this.handleDelete}  
        />
    </main>

    </div>
  );
  }
}



export default App;
