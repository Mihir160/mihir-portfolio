import React, { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these values with your own EmailJS service details
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success("Successfully sent mail!");
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send mail");
        }
      );
  };

  return (
    <div id="contact" className="lg:mx-20 mt-4">
      <h1 className="text-2xl font-bold text-[#00df9a]">Contact</h1>
      <div className="hero mt-4">
        <form
          className="card-body card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-[#00df9a] bg-base-100"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="lg:w-80 input input-bordered"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="lg:w-80 input input-bordered"
          />
          <label>Message</label>
          <textarea className="p-8" name="message" />
          <button type="submit" className="lg:w-80 input input-bordered">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
