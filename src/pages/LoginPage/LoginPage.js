/** @format */

import React from "react";
import { Button, Form, Header, Wraper, Input } from "./LoginPageElements";

export default function LoginPage() {
  return (
    <Wraper>
      <Form>
        <Header>Register User</Header>
        <Input type="email" placeholder="Email..."></Input>
        <Input type="password" placeholder="Password..."></Input>
        <Button>Create User</Button>
      </Form>
      <Form>
        <Header>Login</Header>
        <Input type="email" placeholder="Email..."></Input>
        <Input type="password" placeholder="Password..."></Input>
        <Button>Login</Button>
      </Form>
    </Wraper>
  );
}
