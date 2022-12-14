import Card from "#/components/card";

const data = {
  projects: [
    {
      title: "CSS Practice",
      image: "/cssPractice.png",
      url: "https://sonyun247-css.netlify.app/",
      description:
        "웹사이트 디자인을 똑같이 만들어보며 CSS 연습 (1440x960)Scss, Parcel, Netlify",
    },
    {
      title: "CSS Practice with Gatsby",
      image: "/cssPractice.png",
      url: "https://cssportfoliomain.gatsbyjs.io/",
      description:
        "CSS Practice 정적 웹사이트로 변경 중... (1440x960)React, Gatsby, CMS (Contentful)",
    },
    {
      title: "Portfolio site",
      image: "/portfolio.png",
      url: "https://next-tail-sonyun247.vercel.app/",
      description: "포트폴리오 웹사이트 React, Next.js 13(beta)",
    },
  ],
};

export default async function Projects() {
  return (
    <section>
      {data.projects.map((project) => (
        <Card data={project} />
      ))}
    </section>
  );
}
