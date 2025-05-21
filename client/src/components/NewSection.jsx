function NewsSection() {
  const news = [
    {
      title: 'NASI Fellows Directory 2025',
      badge: 'NEW',
      description: 'The new directory of NASI Fellows for 2025 has been published and is now available online.',
      date: 'May 10, 2025',
    },
    {
      title: '94th Annual Session Highlights',
      badge: 'NEW',
      description: "Review key presentations and awards from the Academy's 94th annual session.",
      date: 'April 15, 2025',
    },
    {
      title: 'Research Grant Applications Open',
      badge: null,
      description: 'Applications for research grants in various scientific disciplines are now being accepted.',
      date: 'March 22, 2025',
    },
    {
      title: 'New Publication: Advances in Molecular Biology',
      badge: null,
      description: 'The latest edition of our scientific journal focusing on advances in molecular biology is now available.',
      date: 'February 8, 2025',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-800">What&apos;s New</h2>
            <p className="mt-1 text-gray-600 text-sm">
              Latest updates, announcements, and news from the Academy
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 px-4 py-2 bg-blue-800 text-white text-sm rounded hover:bg-blue-700 transition"
          >
            View All News
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {news.map((item) => (
            <NewsCard
              key={item.title}
              title={item.title}
              badge={item.badge}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ title, badge, description, date }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex-1 max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
        {badge && <span className="ml-2 text-xs font-medium bg-orange-500 text-white px-2 py-1 rounded-full">{badge}</span>}
      </div>
      <p className="mt-3 text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex items-center justify-between text-gray-500 text-xs">
        <span>{date}</span>
        <a href="#" className="text-blue-800 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsSection;