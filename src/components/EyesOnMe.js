// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    constructor(){
    super()
    }

    focused() {
        console.log('Good!')
    }

    blurred() {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(
            <div>
                <button onFocus={this.focused} onBlur={this.blurred} >EyesOnMe</button>
            </div>
        )
    }
}