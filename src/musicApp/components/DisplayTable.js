import React, { Component } from 'react'

class DisplayTable extends Component {
    constructor() {
        super()
        this.createHeaders = this.createHeaders.bind(this)
    }
    createHeaders() {
        console.log('createHeaders')
        console.log('createHeaders info:', this.props.info)
        if (this.props.info) {
            return (
                <thead>
                    <th>Artist Name</th>
                    <th>Genere</th>
                    <th>Image</th>
                </thead>

            )
        }
    }
    render() {
        return (
            <table>
                {this.createHeaders()}
            </table>
        )
    }
}

export default DisplayTable