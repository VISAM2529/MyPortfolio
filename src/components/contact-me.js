import React,{useState,useRef} from "react";
import emailjs from '@emailjs/browser';
import toast,{Toaster} from "react-hot-toast";
function ContactMe(){

  const form = useRef();
    const user_name = useRef();
    const user_email = useRef();
    const message = useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_vo85vr9', 'template_lkshkkw', form.current, 'ouYcpOZYksJA5e6BM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      user_name.current.value=""
    user_email.current.value=""
    message.current.value=""
    toast.success("Sent")
};

    return(<div>
        <Toaster/>
    <div className="flex flex-col gap-16 flex-wrap justify-center phone:gap-10">
        <div className="flex flex-col items-center gap-5 phone:gap-3">
        <h1 className="text-5xl text-black  font-semibold text-center phone:text-2xl">Contact Me</h1>
        <hr className="w-72 phone:w-48"/>
        </div>
        <div className="flex justify-center">
            <form ref={form} className="flex flex-col gap-10 bg-gray-400 px-10 py-10 rounded-3xl shadow-2xl shadow-slate-900 phone:px-5 phone:py-5">
                <h1 className="text-center font-bold text-3xl">Leave a Message</h1>
                <div className="flex flex-col gap-5">
                <input ref={user_name}className="text-center border-2 border-white rounded-xl px-3 py-1"type="text" placeholder="Your Name" name="user_name"/>
                <input ref={user_email}className="text-center border-2 border-white rounded-xl px-3 py-1"type="email" placeholder="Email" name="user_email" />
                <textarea ref={message}className="text-center border-2 border-white rounded-xl px-3 py-1 h-28"placeholder="Enter Your Message" name="message"/>
                </div>
                <button onClick={sendEmail} className="bg-gray-800 text-white font-semibold px-3 py-1 rounded-2xl shadow-2xl shadow-gray-900 hover:shadow-inner">Send</button>
            </form>
        </div>
        <hr/>
    </div></div>)
}

export default ContactMe;
