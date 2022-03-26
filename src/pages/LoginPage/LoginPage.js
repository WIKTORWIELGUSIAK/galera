/** @format */

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { Button, Form, Header, Wraper, Input } from "./LoginPageElements";
import { auth } from "../../firebase-config";

export default function LoginPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
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
        <Header>Register User</Header>
        <Input
          type="email"
          placeholder="Email..."
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        ></Input>
        <Input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        ></Input>
        <Button onClick={register}>Create User</Button>
      </Form>
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
      {user?.email}
      <Button onClick={logout}>SignOut</Button>
    </Wraper>
  );
}
