import React, {useEffect/*, useState*/} from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import Axios from "axios";
import '../contact.css';

const Contact = () => {
    useEffect(() => {
        document.querySelector('.sendEmail').addEventListener("submit",(event) => {
            event.preventDefault();
            const email = document.querySelector('.email').value;
            const firstName = document.querySelector('.first-name').value;
            const lastName = document.querySelector('.last-name').value;
            const massage = document.querySelector('.massage').value;
            Axios.post('https://desolate-citadel-74681.herokuapp.com/', {
                'from' : `${email}`,
                'message': `${massage}`,
                'subject': `project/info request from ${firstName} ${lastName}`
            }).then(res => console.log(res))
                .catch(err => console.log(err))
        } );
        }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Nav/>
            </header>

            <div className="contactContent">
                <h1>Contact</h1>
                <div className="contact">
                    <form className="sendEmail">
                        <input className="email" placeholder="Email" />
                        <div className="input">
                            <input className="first-name" placeholder="First Name"/>
                            <input className="last-name" placeholder="Last Name" />
                        </div>
                        <textarea  className="massage" placeholder="Massage">
                        </textarea>
                       <div>
                           <button type="submit" className="send">
                               Send Mail
                           </button>
                       </div>
                    </form>

                </div>
            </div>

            <Footer/>
        </div>
    )
};
export default Contact;