import React from 'react';
//import Axios from 'axios';
//import styled from 'styled-components';
const Items =(props)=>{
    return(
        <div>
        <h2>
            Items in category:
        </h2>
            <table>
                <tbody>
                   
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                   
                    { props.Items.length>0 && props.Items.map(item=>{
                        return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
            </div>
    )
}
export default Items