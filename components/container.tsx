function Container({ children }: any) {
  return (
    <div className="flex-auto flex flex-col overflow-y-scroll">{children}</div>
  );
}

export default Container;
