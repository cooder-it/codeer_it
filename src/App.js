import React from 'react';
import "./static/css/style.css"
import Portfolio from "./portfolio"
import {
  Switch,
  Route,
} from "react-router-dom";
import Main from './Main.js'
import { AnimatePresence } from 'framer-motion'

// function getCookie(name) {
//   var cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//       var cookies = document.cookie.split(';');
//       for (var i = 0; i < cookies.length; i++) {
//           var cookie = cookies[i].trim();
//           // Does this cookie string begin with the name we want?
//           if (cookie.substring(0, name.length + 1) === (name + '=')) {
//               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//               break;
//           }
//       }
//   }
//   return cookieValue;
// }

// function send_mail(e) {
//   const name = e.target.Name.value
//   const subject = e.target.Subject.value
//   const email = e.target.Email.value
//   const message = e.target.Message.value
  
//   e.preventDefault()
//   const data = { Name: name, Subject: subject, Email: email,Message: message };
//   var csrftoken = getCookie('csrftoken');
//   console.log(JSON.stringify(data))
//   fetch('http://127.0.0.1:8000/codeerit', {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//       'X-CSRFToken' : csrftoken,
//       },
//     body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .catch((error) => {
//       console.error('Error:', error);
//   });

// }

function App() {
  return (
    <>
      <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/work">
            <Portfolio/>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
