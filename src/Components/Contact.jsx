function Component() {
  return (
    <form className="bg-slate-800 pt-24 pb-24 md:px-12" action="contact">
      <h2 className="text-center text-white font-bold text-5xl">Contact</h2>
      <p className="pt-8 text-center text-gray-400 md:min-w-12 md:max-w-128 md:mx-auto">
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </p>

      <input
        className="w-full my-8 px-4 py-2 text-gray-300 border-b-2 border-gray-600 focus:outline-none"
        placeholder="NAME"
        type="text"
        required
      />

      <input
        className="w-full my-8 px-4 py-2 text-gray-300 border-b-2 border-gray-600 focus:outline-none"
        placeholder="E-MAIL"
        type="email"
        required
      />

      <input
        className="w-full my-8 px-4 pt-2 pb-16 text-gray-300 border-b-2 border-gray-600 focus:outline-none"
        placeholder="MESSAGE"
        type="text-area"
        required
      />
      <button
        type="submit"
        className="underline decoration-2 decoration-emerald-500 text-white text-2xl text-right ml-auto block pr-5 mt-8 hover:text-zinc-500 transition-all duration-300 ease-out hover:decoration-emerald-900 hover:cursor-pointer"
        href="#"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

export default Component;
