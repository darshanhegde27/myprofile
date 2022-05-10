import React, { Component } from 'react'

var l=[
    {
        name:'home',
        src:"../public/3844470-home-house_110332.png",

    }
   
]
export default class Nav extends Component {
  render() {
    return (
        <span id='semi'>
        {l.map((v,i)=>
        {
            return(
                <>
                <br></br>
                <img src={require("./3844470-home-house_110332.png")} alt={v.name} key={i}></img>
                <br></br>
                </>
            )
        })}
      </span>
    )
  }
}
