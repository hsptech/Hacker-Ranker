import React from 'react';
import Axios from 'axios';
//import styled from 'styled-components';
class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categories:[]
        }
    }
    componentDidMount(){
        Axios.get('http://stream-restaurant-menu-svc.herokuapp.com/category').then(response=>{
            this.setState({
                categories:response.data
            })
        })
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.categories.length > 0 && this.state.categories.map(category=>{
                        return <li onClick={this.props.selectItem.bind(this,category.short_name)}>{category.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Categories