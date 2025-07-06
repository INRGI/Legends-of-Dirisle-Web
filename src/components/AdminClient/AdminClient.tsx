"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  DeniedContainer,
  Wrapper,
  CardsRow,
  Card,
  CardTitle,
  CardSubtitle,
  SectionContainer,
} from "./AdminClient.styled";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import AdminShop from "../StoreSection";
import Loader from "../Loader";

const AdminClient = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [activeSection, setActiveSection] = useState<
    null | "news" | "store" | "events"
  >(null);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          setAuthorized(true);
        } else {
          router.push("/admin/login");
        }
      } catch {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  if (loading)
    return (
      <Loader />
    );
  if (!authorized) return <DeniedContainer>Access denied</DeniedContainer>;

  return (
    <Wrapper>
      {!activeSection ? (
        <CardsRow>
          <Card onClick={() => setActiveSection("news")}>
            <CardTitle>
              <PiNewspaperClipping /> Що нового
            </CardTitle>
            <CardSubtitle>Оголошення, оновлення та зміни</CardSubtitle>
          </Card>
          <Card onClick={() => setActiveSection("store")}>
            <CardTitle>
              <MdOutlineShoppingCart /> Магазин
            </CardTitle>
            <CardSubtitle>Управління товарами</CardSubtitle>
          </Card>
          <Card onClick={() => setActiveSection("events")}>
            <CardTitle>
              <FaRegCalendarAlt /> Івенти
            </CardTitle>
            <CardSubtitle>Планування подій</CardSubtitle>
          </Card>
        </CardsRow>
      ) : (
        <>
          {activeSection === "news" && (
            <SectionContainer>📰 Тут буде розділ Що нового</SectionContainer>
          )}
          {activeSection === "store" && (
            <SectionContainer>
              <AdminShop onBack={() => setActiveSection(null)} />
            </SectionContainer>
          )}
          {activeSection === "events" && (
            <SectionContainer>📅 Тут буде розділ Івенти</SectionContainer>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default AdminClient;
