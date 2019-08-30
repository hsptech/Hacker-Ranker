import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Categories from './categories'
import Items from './items'
import Axios from 'axios';
import styled from 'styled-components';
const AppWrapper = styled.div`
  display:flex;
  justify-content:space-between;
`
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      items:[]
  }
    this.selectItem = this.selectItem.bind(this);
  }
  selectItem(shortName,event){
    Axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${shortName}`).then(response=>{
            this.setState({
                items:response.data
            })
        })
  }
  render(){
    return (
      <div className="App">
        <h2 style={{textAlign:'left'}}>Menu Categories</h2>
        <AppWrapper>
          <Categories selectItem={this.selectItem}/>
          {this.state.items.length > 0 && <Items Items={this.state.items}/>}
        </AppWrapper>
      </div>
    );
  }
}

export default App;
