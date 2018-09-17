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
        this.debounce = debouncingFn((name)=> this.props.checkByArtist(name),500)
    }
    handler(e) {
        this.setState({
            name: e.target.value
        }, function () {
            this.debounce(this.state.name)
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