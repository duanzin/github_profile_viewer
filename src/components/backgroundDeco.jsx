function BackgroundDeco() {
  return (
    <>
      <div className="absolute grid grid-cols-17 gap-2 top-28 left-70">
        {Array.from({ length: 289 }).map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 rounded-full bg-neutral-800"
          ></div>
        ))}
      </div>
      <div
        className="absolute w-md aspect-square rounded-full -left-15 bottom-20
bg-[radial-gradient(50%_50%_at_50%_50%,_#005CFF_0%,_rgba(0,0,0,0)_100%)]"
      ></div>
      <div
        className="absolute w-lg aspect-square rounded-full right-35 top-0
bg-[radial-gradient(50%_50%_at_50%_50%,_#005CFF_0%,_rgba(0,0,0,0)_100%)]"
      ></div>
    </>
  );
}

export default BackgroundDeco;
