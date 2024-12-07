import { useState } from "react";
import SocialIcons from "./SocialIcons";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    const { name, email, message } = formData;

    if (!name) {
      formErrors.name = "Name is required";
    }

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }

    if (!message) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setResult("Sending....");
    setIsLoading(true);
    const form = new FormData(event.target);
    form.append("access_key", "a3609597-1c22-4f57-8bb1-80da57c6e348");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      setResult("Error sending form. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="body-font relative bg-black text-white">
      <div className="container mx-auto px-5 py-24">
        {/* Heading */}
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Contact Us
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question,
            feedback, or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <form onSubmit={onSubmit} className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-500"
                  placeholder="Name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-yellow-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-yellow-500"
                >
                  Name
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
            </div>

            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-500"
                  placeholder="Email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-yellow-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-yellow-500"
                >
                  Email
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-500"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-yellow-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-yellow-500"
                >
                  Message
                </label>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="w-full p-2">
              <button
                type="submit"
                className={`mx-auto flex rounded border-0 py-2 px-8 text-lg text-black focus:outline-none ${
                  isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
            <a href="mailto:jugendragangwar8791@gmail.com" className="text-yellow-400">
              jugendragangwar8791@gmail.com
            </a>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
