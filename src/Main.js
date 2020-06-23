import React from 'react'
import { NavLink } from "react-router-dom";
import "./static/css/style.css"
import logo from "./static/images/Przezroczysty.jpg"
import mainpic from "./static/images/img.jpg"
import gosia from "./static/images/ja@2x.jpg"
import kamil from "./static/images/ja@1x.jpg"
import { motion } from "framer-motion"

export default class Main extends React.Component {

    componentDidMount()
    {
        var design_str = document.querySelector('.Work div span:nth-child(1)')
        var technol_str = document.querySelector('.Work div span:nth-child(3)')
        var minimalism_str = document.querySelector('.Work div span:nth-child(5)')
        const tab = [design_str, technol_str, minimalism_str]
        tab.forEach((item, index)=>{
            item.style.display   = "block"
            item.style.animation = `main_description 1.6s ${index/2}s`
            item.onanimationend = () => {
                item.style.opacity = "1"
            }
        })
    }
    render() {
        return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit   ={{ opacity: 0 }}>
        <div className="wrapper">
            <nav>
                <ul>
                <li><div className="logo"><img src={logo} alt="logo"/></div></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Let's talk<i className="fas fa-long-arrow-alt-right"></i></a></li>
                </ul>
            </nav>
            <main>
                <div className="Work" id="work">
                    <div>  
                    <div>     
                        <span>design</span><br/>
                        <span>& technology</span><br/>
                        <span>Minimalism is the ultimate form of sophistication.</span>
                    </div>
                    <img src={mainpic} alt="biznes"/>  
                    </div> 
                </div>

                <div className="About" id="about">
                <div className="members">
                    <div className="attach">
                    <span>Who we are ?</span>
                    <img src={gosia} alt="gosia_img"/>
                    <p className="name">Gosia</p>
                    <p>graphic designer, ilustrator and illustration lover focused on UI/UX learning. She try connects traditional art techniques with digital</p>
                    </div>
                    <div>
                    <img src={kamil} alt="kamil_img"/>
                    <p className="name">Kamil</p>
                    <p>bioinformatician with passion for coding, who studies at Poznań University of Technology. Web technologies are in his interes with pixel-perfect solutions</p>
                    </div>
                        </div>
                    </div>
                <div className="letsTalk" id="contact">
                    <div>
                        <h2>Let's talk !</h2>
                        <p>Feel free, write to us and tell as more about your project</p>
                    </div>
                    <form name="contact" className="form" method="post">
                        <input type="hidden" name="form-name" value="contact"/>
                    
                        <label><input type="text" name="name" placeholder="Name"/></label>       
                        
                        <label><input type="email" name="email" placeholder="Email"/></label>
                        
                        <label><textarea name="message" placeholder="Message"></textarea></label>
                        
                        <button type="submit">Send</button>
                    </form>
                </div>
                <footer>
                <span>Codeer</span>
                <span>Poznań 2020</span>
                </footer>
            </main>
        </div>
        </motion.div>
        )
    }
}