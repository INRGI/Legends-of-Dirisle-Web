"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

const Container = styled.div`
  min-height: 100vh;
  background: #0d0d0d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
`;

const Form = styled.form`
  background: #1a1a1a;
  padding: 36px 36px 20px 36px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 16px #a30000cc;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  @media (max-width: 420px) {
    padding: 28px 20px;
    gap: 16px;
  }
`;

const Input = styled.input`
  padding: 14px 16px;
  border-radius: 12px;
  border: none;
  background: #222222;
  color: white;
  font-size: 1.1rem;
  transition: background 0.3s ease, outline 0.3s ease;
  outline-offset: 2px;

  &:focus {
    background: #330000;
    outline: 2px solid #cc0000;
  }

  &::placeholder {
    color: #777;
  }

  @media (max-width: 420px) {
    font-size: 1rem;
    padding: 12px 14px;
  }
`;

const Button = styled.button`
  padding: 16px 20px;
  background: #a30000;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  font-size: 1.15rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  box-shadow: 0 0 10px #a30000bb;
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;

  &:hover {
    background: #cc0000;
    box-shadow: 0 0 18px #cc0000dd;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 420px) {
    padding: 14px 16px;
    font-size: 1rem;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-weight: 600;
  margin: 0;
  font-size: 0.95rem;
  user-select: none;
  min-height: 24px;
`;

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Wrong login or password");
    }
  }

  return (
    <Container>
      <Form onSubmit={onSubmit} noValidate>
        <Input
          type="text"
          placeholder="Enter login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
          autoComplete="username"
          spellCheck={false}
          maxLength={50}
        />
        <Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          maxLength={50}
        />
        <Button type="submit">Login</Button>
        <ErrorMessage aria-live="polite">{error || "\u00A0"}</ErrorMessage>
      </Form>
    </Container>
  );
}
