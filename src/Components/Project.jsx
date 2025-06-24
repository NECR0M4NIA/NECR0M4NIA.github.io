function Component({
  picture,
  name,
  primaryLangage,
  secondaryLangage,
  tertiaryLangage,
  technologies,
}) {
  return (
    <div className="p-5 my-12">
      <a href="#">
        <img
          className="ml-auto mr-auto rounded-xl shadow-black-5 shadow-2xl object-cover w-full h-64 md:h-96 hover:scale-102 transition-all duration-300 ease-out"
          src={picture}
          alt=""
        />
      </a>
      <a href="#">
        <p className="text-white text-2xl mt-8 hover:text-zinc-500 transition-all duration-300 ease-out inline-block">
          {name}
        </p>
      </a>
      <div className="flex flex-row gap-3">
        {/* <p className="text-gray-400 mt-3">{primaryLangage}</p>
        <p className="text-gray-400 mt-3">{secondaryLangage}</p>
        <p className="text-gray-400 mt-3">{tertiaryLangage}</p> */}
        {technologies.map((tech) => (
          <p key={tech} className="text-gray-400 mt-3 md:text-lg">
            {tech}
          </p>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          className="mt-8 tracking-widest text-white underline decoration-2 decoration-emerald-500 hover:text-zinc-500 transition-all duration-300 ease-out hover:decoration-emerald-900 md:text-xl"
          href="#"
        >
          VIEW PROJECT
        </a>
        <a
          className="mt-8 tracking-widest text-white underline decoration-2 decoration-emerald-500 hover:text-zinc-500 transition-all duration-300 ease-out hover:decoration-emerald-900 md:text-xl"
          href="#"
        >
          VIEW CODE
        </a>
      </div>
    </div>
  );
}

export default Component;
