import React, { Component } from 'react';
import debouncingFn from './debouncing';
import { checkByArtist } from '../../store/actions'
import { connect } from 'react-redux';

let checkByArtistDeb = debouncingFn(checkByArtist, 300)
class InputDebouncig extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
        this.handler = this.handler.bind(this)
    }
    handler(e) {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        }, function () {
            this.props.checkByArtist(this.state.name)
        })
    }
    render() {
        console.log(this.props.placeholderMessages)
        return (
            <input type='text' onChange={this.handler} placeholder={this.props.placeholderMessages} />
        )
    }
}



export default connect(null, {
        checkByArtist
})(InputDebouncig)