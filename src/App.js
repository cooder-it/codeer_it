import React from 'react';


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

function send_mail(e) {
  const name = e.target.Name.value
  const subject = e.target.Subject.value
  const email = e.target.Email.value
  const message = e.target.Message.value
  
  e.preventDefault()
  const data = { Name: name, Subject: subject, Email: email,Message: message };
  var csrftoken = getCookie('csrftoken');

  fetch('http://kamilkowicz.pythonanywhere.com/codeerit', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken' : csrftoken,
      },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error);
  });

}

function App() {
  return (
    <>
      <form onSubmit={send_mail} action="">
          <input type="text" name="Name" placeholder="name"/>
          <input type="text" name="Subject" placeholder="subject"/>
          <input type="text" name="Email" placeholder="email"/>
          <input type="text" name="Message" placeholder="message"/>
          <button>Send</button>
      </form>
      
    </>
  );
}

export default App;
