/** @format */

import React, { useContext, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { Button, Form, Header, Wraper, Input } from "./LoginPageElements";
import { auth } from "../../firebase-config";
import { AppContext } from "../../App";

export default function LoginPage() {
  const app = useContext(AppContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <Wraper>
      <Form>
        <Header>Login</Header>
        <Input
          type="email"
          placeholder="Email..."
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        ></Input>
        <Input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        ></Input>
        <Button onClick={login}>Login</Button>
      </Form>
      <Header>User Logged In</Header>
      {app.user?.email}
      <Button onClick={logout}>Log Out</Button>
    </Wraper>
  );
}
