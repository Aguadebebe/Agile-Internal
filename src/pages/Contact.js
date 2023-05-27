import { useState } from "react";
import axios from "axios";

// figure out how to POST and GET to firestore.
// Decide whether to write the command that

function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      message: "",

    });
    const [responseData, setResponseData] = useState({});
     
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
            [name]: value
        });
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formData);
    
      try {
        const response = await axios.post(
          "https://firestore.googleapis.com/v1/projects/agile-internal/databases/(default)/documents/contacts",
          {
            fields: {
              name: { stringValue: formData.name },
              phone: { stringValue: formData.phone },
              email: { stringValue: formData.email },
              message: { stringValue: formData.message },
            },
          }
        );
    
        if (response.status === 200) {
          const responseData = await response.data;
          setResponseData(responseData);
          setFormData({ name: "", phone: "", email: "", message: "" });
        } else {
          console.log(`status: ${response.status}`);
        }
      } catch (error) {
        console.log("Form submission failed", error);
      }
    };
    
     
    
     
    
 
    
    return  (
        <div>
          <h1 className="flex justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-green-500 mt-10">
            Contact Information
          </h1>
          <h2 className="flex justify-center text-lg mt-5">
            Feel free to reach out with any questions by filling out the form below 
            or calling (434)989-1045.
          </h2>
          <form className="w-full max-w-md mx-auto mt-5"
          onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2">
                Name:
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter name" 
                className="border border-gray-500 py-2 px-3"
                value={formData.name}
                onChange={handleInputChange}
              
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="phone" className="mb-2">
                Phone:
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Enter phone number" 
                className="border border-gray-500 py-2 px-3"
                value={formData.phone}
                onChange={handleInputChange}
                
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2">
                Email:
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter email" 
                className="border border-gray-500 py-2 px-3"
                value={formData.email}
                onChange={handleInputChange} 
                 
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="mb-2">
                Message:
              </label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter your message" 
                className="border border-gray-500 py-2 px-3"
                value={formData.message}
                onChange={handleInputChange}
                 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
          </form>
        </div>
    );
}

export default Contact;