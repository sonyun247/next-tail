"use client";
import Card from "./card";
import { useEffect, useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState([]);
  async function getCards() {
    const res = await fetch("/projects.json");
    const { projects } = await res.json();
    setCards(projects);
  }
  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      {cards.map((project) => (
        <Card data={project} />
      ))}
    </>
  );
}
