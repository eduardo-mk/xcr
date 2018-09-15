import { Component } from 'react'

class InputDebouncig extends Component {
   constructor() {
      let waitALittle = true;
      let timeout =  undefined;
      function debouncing(cb, wait) {
         return function(){
            let callFunction =()=> cb.apply(this, arguments)
         }
      }
      super()
   }

}