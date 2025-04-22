import Logo from "../assets/image 1.png";

function Title() {
  return (
    <section className="flex flex-row items-center justify-center gap-2.5">
      <img src={Logo} alt="Logo Github" />
      <h1 className="text-6xl text-white text-center font-semibold tracking-normal">
        Perfil&nbsp;<b className="font-extrabold">GitHub</b>
      </h1>
    </section>
  );
}

export default Title;
