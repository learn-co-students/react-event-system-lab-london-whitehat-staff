// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    render() {

        const onBlurHandler = () => {
            console.log('Hey! Eyes on me!')
        }
        const onFocusHandler = () => {
            console.log('Good!')
        }

        return ( 

            <button onBlur={onBlurHandler} onFocus={onFocusHandler}></button>

        )
    }
}