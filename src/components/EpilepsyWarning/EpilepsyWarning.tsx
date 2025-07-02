'use client'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const smokeAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30px;
  background-color: #0c0c0c;
  background-image:
    radial-gradient(circle at 30% 30%, rgba(255, 0, 0, 0.08), transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(255, 20, 20, 0.06), transparent 65%),
    radial-gradient(circle at 50% 50%, rgba(200, 0, 0, 0.05), transparent 75%);
  background-blend-mode: screen;
  animation: ${smokeAnimation} 35s ease-in-out infinite, ${fadeIn} 1s ease forwards;
  background-size: 250% 250%;
  color: #eee;
  text-align: center;
  position: fixed;
  inset: 0;
  z-index: 10000;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff4d4d;
  text-shadow: 0 0 8px rgba(255, 77, 77, 0.7);
  margin: 0;
`

const Text = styled.p`
  max-width: 450px;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #ccc;
  margin: 0;
`

const Button = styled.button`
  margin-top: 30px;
  padding: 14px 36px;
  font-size: 1.125rem;
  font-weight: 600;
  color: #eee;
  background: linear-gradient(135deg, #660000 0%, #330000 100%);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 0, 0, 0.7);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #800000 0%, #4d0000 100%);
    box-shadow: 0 6px 18px rgba(128, 0, 0, 0.9);
  }

  &:focus {
    outline: 2px solid #cc3333;
    outline-offset: 2px;
  }
`

const STORAGE_KEY = 'epilepsyWarningAccepted'

export default function EpilepsyGate({ children }: { children: React.ReactNode }) {
  const [accepted, setAccepted] = useState<boolean | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    setAccepted(saved === 'true')
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setAccepted(true)
  }

  if (accepted === null) return null

  if (!accepted) {
    return (
      <Container role="dialog" aria-modal="true" aria-labelledby="warning-title">
        <Title id="warning-title">Увага!</Title>
        <Text>
          На цьому сайті є анімовані ефекти, які можуть викликати дискомфорт у людей з фоточутливою епілепсією.
          Якщо у вас є такі проблеми, рекомендуємо не використовувати сайт або бути обережними.
        </Text>
        <Button onClick={handleAccept}>Я розумію і хочу продовжити</Button>
      </Container>
    )
  }

  return <>{children}</>
}
