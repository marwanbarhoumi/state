import "./App.css";
import React, { Component } from "react";
import image from "./component/imagee.jpg";
import Timer from "./component/Profile";

class App extends Component {
  state = {
    Person: {
      fullName: "Marwen Barhoumi",
      bio: "Full Stack JS",
      imgSrc: image,
      profession: "STUDENT",
    },
    show: faw
  };

  render() {
    var Handlechange = () => {
      this.setState({
        show: !this.state.show,
      });
    };

    return (
      <center>
        <div>
          <button onClick={Handlechange}>

            {this.state.show ? "Hide" : "show"}
          </button>

          <p className="faty">
            <Timer />
            {this.state.show ? (
              <div>
                <h1>{this.state.Person.fullName}</h1>
                <h2>{this.state.Person.bio}</h2>
                <h3>{this.state.Person.profession}</h3>

                <img src={image} alt="profile" />
              </div>
            ) : null}
          </p>
        </div>
      </center>
    );
  }
}

export default App;