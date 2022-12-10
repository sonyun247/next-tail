import Image from "next/image";
import Link from "next/link";

interface ICard {
  data: {
    title: string;
    image: string;
    url: string;
    description: string;
  };
}

export default function Card({ data }: ICard) {
  return (
    <article className="p-7 flex flex-col items-center">
      <header className="pb-2 text-3xl font-semibold dark:text-blue-400 tracking-wider">
        <h2>{data?.title}</h2>
      </header>
      <div className="group flex flex-col relative justify-center items-center">
        <Link href={data?.url} target="_blank">
          <Image
            src={data?.image}
            alt={data?.title}
            priority
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={data?.image}
            className="rounded-t-3xl rounded-l-3xl group-hover:brightness-50"
          />
        </Link>
        <div className="group-hover:visible invisible absolute leading-loose font-bold italic text-xl text-white dark:text-white text-center">
          <p>{data?.description}</p>
        </div>
      </div>
    </article>
  );
}
