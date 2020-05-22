import React from "react";
import ReactDOM from "react-dom";

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
  constructor(props) {
    
    // and we have tp call the super class **required
    super(props);
    
    // this is creating a state object with lat inside it with initialized default null value
    // WE CAN ONLY INITIALIZE this.state this way only once here
    this.state = { lat: null };

// now if we are trying to use this inside a normal function decleration then itt won't access the React.component class we 
// nee to use it inside the call back or i would say arrow function

    window.navigator.geolocation.getCurrentPosition(
      pos=>{
        this.setState({lat:pos.coords.latitude});
      },
      err=>{
        console.log(err);
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

    return <div>lattitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
