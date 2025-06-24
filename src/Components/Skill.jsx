function Component({ name, yearsOfXp }) {
  return (
    <div className="mx-auto my-4 flex flex-col items-center justify-center rounded-2xl gap-4 p-4 md:flex-row md:flex-wrap md:items-center md:justify-center 2xl:justify-between 2xl:mx-15">
      <h2 className="flex flex-col items-center p-7 font-bold text-5xl text-white 2xl:text-5xl">
        {name}
      </h2>
      <p className="flex flex-col items-center p-2 rounded-2xl font-thin text-2xl text-gray-300 2xl:">
        {yearsOfXp} Years Experience
      </p>
    </div>
  );
}

export default Component;
