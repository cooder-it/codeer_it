import React from 'react';
import "./static/css/style.css"
import logo from "./static/images/Przezroczysty.jpg"
import mainpic from "./static/images/img.jpg"
import gosia from "./static/images/ja@2x.jpg"
import kamil from "./static/images/ja@1x.jpg"


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
  fetch('http://127.0.0.1:8000/codeerit', {
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
    <div className="wrapper">
      <nav>
        <ul>
          <li><div className="logo"><img src={logo}/></div></li>
          <li><a href="">Work</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Let's talk</a></li>
        </ul>
      </nav>
      <main>
        <div className="Work">
          <div>
            <span>design</span><br/>
            <span>& technology</span><br/>
            <span>Minimalism is the ultimate form of sophistication.</span>
          </div>
          <div><img src={mainpic}/></div>
        </div>

        <div className="About">
          <span>Who we are ?</span>
          <div className="members">
            <div>
              <img src={gosia}/>
              <p>Gosia</p>
              <p>graphic designer, ilustrator and illustration lover focused on UI/UX learning. She try connects traditional art techniques with digital</p>
            </div>
            <div>
              <img src={kamil}/>
              <p>Kamil</p>
              <p>bioinformatician with passion for coding, who studies at Poznań University of Technology. Web technologies are in his interes with pixel-perfect solutions</p>
            </div>
				  </div>
			  </div>
        <div className="letsTalk">
          <h2>Let's talk!</h2>
          <p>Feel free, write to us contact@codeer.it and tell as more about your project</p>
        </div>
        <footer>
          <span>Codeer</span>
          <span>Poznań 2020</span>
        </footer>
      </main>
      <form onSubmit={send_mail} action="" method="POST">
          <input type="text" name="Name" placeholder="name"/>
          <input type="text" name="Subject" placeholder="subject"/>
          <input type="text" name="Email" placeholder="email"/>
          <input type="text" name="Message" placeholder="message"/>
          <button type="submit">Send</button>
      </form>
      </div>
    </>
  );
}

export default App;
