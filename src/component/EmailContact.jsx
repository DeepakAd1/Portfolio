// ContactForm.jsx
import React, { useRef , useEffect } from "react";
import emailjs from "emailjs-com";

const EmailContact = ({ref}) => {
  const form = useRef();

  useEffect(()=>{
    console.log("helo",ref?.current)
    if(ref?.current){
      ref.current.focus()
    } 
  },[ref])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m17yuph",   // from EmailJS dashboard
        "template_cpkljj7",  // from EmailJS dashboard
        form.current,
        "XrEXMI5XSdtmmyUXS"    // from EmailJS (user ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-4">
      <label className="block mb-2 text-white">Name</label>
      <input ref={ref} type="text" name="user_name" required className="w-full p-2 mb-4 rounded border border-white bg-transparent" />

      <label className="block mb-2 text-white">Email</label>
      <input type="email" name="user_email" required className="w-full p-2 mb-4 rounded border border-white bg-transparent" />

      <label className="block mb-2 text-white">Message</label>
      <textarea name="message" required className="w-full p-2 mb-4 rounded h-32 border border-white bg-transparent" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  );
};

export default EmailContact;
