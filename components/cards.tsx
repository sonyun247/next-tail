"use client";
import Card from "./card";
import { useEffect, useState } from "react";

interface ICards {
  project: {
    title: string;
    image: string;
    url: string;
    description: string;
  };
}

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
      {cards.map(({ project }: ICards) => (
        <Card key={project.title} data={project} />
      ))}
    </>
  );
}
