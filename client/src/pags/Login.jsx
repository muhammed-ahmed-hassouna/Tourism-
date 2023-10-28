import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    
  });
  const history = useNavigate();

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
    if (!formData.password || formData.password.length < 8 || !passwordRegex.test(formData.password)) {
      errors.password = "Password must be at least 6 characters long";
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateForm) {
      console.log(formData);
      try {
        const response = await axios.post('http://localhost:5000/Login', formData);
        history("/");
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-transparent bg-clip-text px-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div class="flex items-center justify-between">
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-cyan-800 to-blue-700 hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <Link
                  to="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Go back
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
