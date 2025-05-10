import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";

const Contact = ({ socialLinks }) => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name: name, reply_to: email, message } = formValues;

    if (!name || !email || !message) {
      setError("Please add all the input values.");
      setTimeout(() => setError(""), 2500);
      setMessage("");
      return;
    }

    if (!isEmailValid(email)) {
      setError("Use the correct email format");
      setTimeout(() => setError(""), 2500);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setMessage("Message sent successfully!");
        setTimeout(() => setMessage(""), 2500);
        setError("");
        setFormValues({ from_name: "", reply_to: "", message: "" });
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => setError("Something went wrong"), 3000);
      });
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto min-h-screen mb-8 mt-12">
      <h3 className="text-center text-2xl font-bold text-blue-700 mb-5">
        Contact Us
      </h3>

      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-between gap-8 border-2 shadow-md shadow-blue-950 h-fit w-full border-blue-950 h py-6 px-4 rounded-2xl ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex items-center flex-col justify-between py-5 px-4 gap-3"
          >
            <Input
              type="text"
              value={formValues.from_name}
              onChange={handleChange}
              required
              name="from_name"
              placeholder="Name..."
              className="bg-[#0e0d0d] text-blue py-4 text-lg text-blue-700 border-2 border-blue-950 rounded-full outline-none focus:border-blue-800  w-full"
            />
            <Input
              type="email"
              value={formValues.reply_to}
              onChange={handleChange}
              required
              name="reply_to"
              placeholder="Email..."
              className="bg-[#0e0d0d] text-blue py-4 text-lg text-blue-700 border-2 border-blue-950 rounded-full outline-none focus:border-blue-800 w-full "
            />
            <Textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              required
              placeholder="Message..."
              className="h-32 bg-[#0e0d0d] text-blue py-4 text-lg text-blue-700 border-2 border-blue-950 rounded-md outline-none focus:border-blue-800 w-full"
            />
            <Button type="submit">Submit</Button>
          </form>
          {message && <p className="text-sm text-blue-500">{message}</p>}
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 gap-4">
        {socialLinks.map((item, key) => (
          <a
            href={item.link}
            key={key}
            className="text-blue-200 text-3xl m-5 hover:text-blue-700 hover:-translate-1.5 hover:text-4xl transition-all duration-500 ease-in-out"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
