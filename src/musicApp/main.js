import React, { Component } from 'react'

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
               <input
                  type='text' placeholder={this.state.placeholder} />
            </form>
         </div>
      )
   }
}
export default MusicApp