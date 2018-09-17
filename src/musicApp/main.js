import React, { Component } from 'react'
import Input from './components/InputDebouncing'
import DisplayTable from './components/DisplayTable'
import { connect } from 'react-redux'
class MusicApp extends Component {

      constructor() {
            super();
            let placeholderMessages = {
                  author: 'Search by Author',
                  track: 'Search Track'
            }
            this.state = {
                  placeholder: "Search by Author"
            }

            this.inputCheckedH = (e) => {
                  this.setState({
                        placeholder: placeholderMessages[e.target.id]
                  })
            }
      }

      render() {
            return (
                  <div>
                        <h1>Music App</h1>
                        <form action="">
                              <input
                                    type="radio" name="opt" id="author" defaultChecked onClick={this.inputCheckedH} />Author
               <input
                                    type="radio" name="opt" id="track" onClick={this.inputCheckedH} />Track
                  <Input placeholderMessages={this.state.placeholder} />
                  <DisplayTable info={this.props.info}/>
                        </form>
                  </div>
            )
      }
}
export default connect((state) => {
      return {
            info: state.music.byArtist
      }
})(MusicApp)