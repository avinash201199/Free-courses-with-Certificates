import React, { useState } from "react";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import { useStore } from "./UserState";

const Login = () => {
  const [userDetails, setUserDetails] = useState({ name: "", password: "" });
  // const [sessionUser, setSessionUser] = useState(null);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  function LoginSubmit(e) {
    e.preventDefault();
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, userDetails.name, userDetails.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <div class="w-full max-w-xs margin-left-for-fixed">
        <form
          onSubmit={LoginSubmit}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="abc@gmail.com"
              onChange={(e) => {
                setUserDetails({ ...userDetails, name: e.target.value });
              }}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
              }}
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Login;
