import { useState } from "react";
import "./Contact.css"

export const ContactForm= ()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Invalid email address.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    }
  };
  

  return (
    <div id="contact" className="contact-form">
    <h2>Contact Us</h2>
   
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" onChange={handleChange} value={formData.name} required />
  
      <label>Email</label>
      <input type="email" name="email" onChange={handleChange} value={formData.email} required />
  
      <label>Message</label>
      <textarea name="message" rows="4" onChange={handleChange} value={formData.message} required></textarea>
  
      <button type="submit">Send Message</button>
    </form>
    {error && <p className="text-red-500 mb-2">{error}</p>}
    {success && <p className="text-green-500 mb-2">{success}</p>}
  </div>
  
  );
}
