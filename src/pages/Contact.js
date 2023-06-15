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
    const [formErrors, setFormErrors] = useState({});
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
            [name]: value
        });
    }

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (formData.name.trim() === "") {
          errors.name = "Name is required";
          isValid = false;
        }

        if (formData.phone.trim() === "") {
          errors.phone = "Phone is required";
          isValid = false;
        }

        if (formData.email.trim() === "") {
          errors.email = "Email is required";
          isValid = false;
        }

        if (formData.message.trim() === "") {
          errors.message = "Message is required";
          isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };


    
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formData);

      if (!validateForm()) {
        return;
      }
      
    
      try {

        const { name, phone, email, message } = formData;

        const response = await axios.post("http://localhost:5000/api/contact", {
          name,
          phone,
          email,
          message,
        });
  
      if (response.status === 200) {
          const responseData = await response.data;
          setResponseData(responseData);
          setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form input fields to empty after form submission
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
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
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
              {formErrors.phone && (
                <p className="text-red-500">{formErrors.phone}</p>
              )}
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
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
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
              {formErrors.message && (
                <p className="text-red-500">{formErrors.message}</p>
              )}
            </div>
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold xs:py-0 sm:py-2 md:py-2 lg:py-2 px-4 rounded">
                Submit
            </button>
          </form>
        </div>
    );
}

export default Contact;