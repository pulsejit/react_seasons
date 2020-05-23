import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';

// let App = function() {
//   // geolocation api start
//   function success(pos) {
//     console.log(pos);
//   }
//   function error(err) {
//     console.log(err);
//   }
//   window.navigator.geolocation.getCurrentPosition(success, error);

//   return <div>lattitude: </div>;
// };

class App extends React.Component {
  // now so we need something which will execute at first so that we can initialize the constractor at the begenning of our class
  // constractor

  // constructor(props) {
  //   // and we have tp call the super class **required
  //   super(props);

  //   // this is creating a state object with lat inside it with initialized default null value
  //   // WE CAN ONLY INITIALIZE this.state this way only once here

  //   //to handle error again we rerender our jsx

  //   this.state = { lat: null, errorMessage: "" };

  //   // now if we are trying to use this inside a normal function decleration then itt won't access the React.component class we
  //   // nee to use it inside the call back or i would say arrow function

  //   // window.navigator.geolocation.getCurrentPosition(
  //   //   pos => {
  //   //     this.setState({ lat: pos.coords.latitude });
  //   //   },
  //   //   err => {
  //   //     // console.log(err);
  //   //     this.setState({ errorMessage: err.message });
  //   //   }
  //   // );

  //   // well the best practices says that we should use lifecycle methods in order to do some data loading
  // }

  // so there is another alternate method to declere states in react which is mostly used btw...
  state = {lat:null, errorMessage:''};

  //lifecycle methods 
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({ lat: pos.coords.latitude });
      },
      err => {
        // console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }



  render() {
    // from next on we wont be writing anything inside the render function

    // function success(pos) {
    //   console.log(pos);
    //   // DO NOT EVER USE direct assignment to the this.state always use setState()
    //   // this.state.lat = pos.GetCurrentLocation.coords.latitude;
    //   this.setState()
    // }
    // function error(err) {
    //   console.log(err);
    // }
    // window.navigator.geolocation.getCurrentPosition(success, error);

    // return (
    //   <div>
    //     {/* in order to use conditional statement we need to return in every condition */}
    //     {/* lattitude:{this.state.lat}
    //     <br/>
    //     E R R O R: {this.state.errorMessage} */}
    //     {this.state.lat}
    //     {this.state.errorMessage}
        
    //   </div>
    // );

    // this is called conditional rendering
    if(this.state.lat && !this.state.errorMessage){
      // here we need to write the instance otherwise we can't access the component 
      return <SeasonDisplay lat={this.state.lat} /> //and we also need to pass the state variable as a property to the seasonDisplay in order to access it from there
    }
    
    if(!this.state.lat && this.state.errorMessage){
      return <div>E R R O R : {this.state.errorMessage}</div>
    }

    return <div>LOADING...</div>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
