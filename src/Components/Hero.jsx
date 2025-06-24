import User from "../images/gb.png";

function Component() {
  return (
    <section className="flex flex-col items-center justify-between md:flex-col md:items-center md:justify-between">
      <img
        className="hero-user w-72 m-auto grayscale md:w-72 md:absolute md:top-64 md:left-auto md:right-12"
        src={User}
        alt=""
      />
      <h1 className="mt-14 mb-14 text-4xl text-white font-bold text-center md:mx-12 md:mr-auto md:text-5xl">
        Nice to meet you! <br />
        I’m{" "}
        <span className="underline decoration-solid decoration-emerald-500 decoration-3">
          NECRO MANIA.
        </span>
      </h1>
      <p className="text-center text-gray-400 px-8 md:text-left md:w-full md:mr-auto md:ml-4">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <a
        className="tracking-widest text-white underline decoration-solid decoration-emerald-500 decoration-3 block mx-auto md:mr-auto md:ml-12 md:mt-8 md:mb-32 hover:text-zinc-500 transition-all duration-300 ease-out hover:decoration-emerald-900"
        href="#"
      >
        CONTACT ME
      </a>
    </section>
  );
}

export default Component;
