export default function LoadingCard() {
  return (
    <article className="p-7 flex flex-col items-center">
      <header className="pb-2 text-3xl font-semibold dark:text-blue-400 tracking-wider">
        <h2>Project 불러오는 중...</h2>
      </header>
      <div className="rounded-t-3xl rounded-l-3xl h-[500px] w-[500px] bg-gradient-to-r from-transparent to-blue-300"></div>
    </article>
  );
}
