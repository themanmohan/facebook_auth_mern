import axios from "axios";
import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Auth extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
   console.log(response)
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

 
  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId = "195727029183679"
          autoLoad={false}
          fields= "name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}


// import React, { useState } from 'react';
// import FacebookLogin from 'react-facebook-login';
// import { Card, Image } from 'react-bootstrap';
// //import './App.css';

// function Auth() {

//   const [login, setLogin] = useState(false);
//   const [data, setData] = useState({});
//   const [picture, setPicture] = useState('');

//   const responseFacebook = (response) => {
//     console.log(response);
//     setData(response);
//     setPicture(response.picture.data.url);
//     if (response.accessToken) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   }

//   return (
//     <div class="container">
//       <Card style={{ width: '600px' }}>
//         <Card.Header>
//           {!login &&
//             <FacebookLogin
//               appId = "347833033625650"
//               autoLoad={true}
//               fields="name,email,picture"
//               scope="public_profile,user_friends"
//               callback={responseFacebook}
//               icon="fa-facebook" />
//           }
//           {login &&
//             <Image src={picture} roundedCircle />
//           }
//         </Card.Header>
//         {login &&
//           <Card.Body>
//             <Card.Title>{data.name}</Card.Title>
//             <Card.Text>
//               {data.email}
//             </Card.Text>
//           </Card.Body>
//         }
//       </Card>
//     </div>
//   );
// }

// export default Auth;