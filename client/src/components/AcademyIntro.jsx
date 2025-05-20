function AcademyIntro() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-800">The Academy</h2>
          <h3 className="mt-2 text-xl font-semibold">Advancing Scientific Excellence Since 1930</h3>
          <p className="mt-4 text-gray-700">
            Evolution: The National Academy of Sciences, India (initially called "The Academy of Sciences of United Provinces of Agra and Oudh")
            was founded in the year 1930, with the objectives to provide a national forum for the publication of research work
            carried out by Indian scientists and to provide opportunities for exchange of views among them.
          </p>
          <p className="mt-2 text-gray-700">
            Over the years, the Academy has grown to become one of the oldest and most prestigious scientific organizations in India,
            dedicated to promoting scientific research, recognizing outstanding contributions, and fostering scientific temper in the country.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
            Read More
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/path/to/audience.jpg"
            alt="Audience at a conference"
            className="w-full rounded-lg shadow-lg object-cover h-64 md:h-auto"
          />
        </div>
      </div>
    </section>
  );
}
export default AcademyIntro;