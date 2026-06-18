const hobbies = [
  "📚 Reading",
  "✈️ Traveling",
  "📸 Photography",
  "🚗 Countryside Driving",
  "🎧 Podcasts",
  "🎵 Music",
  "🍳 Cooking",
  "🐱 Cats",
  "🎮 Mobile Gaming",
  "🎨 Henna Art",
  "🏡 Decorating Spaces",
  "📷 Personal Photoshoots",
];

const BeyondCoding = () => {
  return (
    <section id="beyondcoding" className="section-container">
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] !mb-4">
          Beyond Coding
        </p>

        <h2 className="section-title">
          Things I Enjoy
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 !mt-10">

          {hobbies.map((hobby) => (
            <div
              key={hobby}
              className="
                card
                p-8
                text-center
                flex
                items-center
                justify-center
                min-h-[140px]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <p className="text-lg">
                {hobby}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BeyondCoding;