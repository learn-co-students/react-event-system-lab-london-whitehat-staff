// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    render() {

        const onKeyUpHandler = () => {
            console.log('Entering password...')
        }

        return ( 

            <input type='password' onKeyUp={onKeyUpHandler}></input>

        )
    }
}