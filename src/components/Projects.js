import React, { useState } from 'react';

const projects = {
  videoEditing: [],
  graphicDesign: [
    { id: 1, src: '\Florence_artwork_1.png', title: 'Design 1' },
    { id: 2, src: 'GRAFIC1.jpg', title: 'Design 2' },
    { id: 3, src: '/Sariha_art.png', title: 'Design 3' },
  ],
};

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('videoEditing');

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-300 text-center" id="Projects">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">My Work</h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {['videoEditing', 'graphicDesign'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all shadow-md ${
                activeCategory === category
                  ? 'bg-yellow-500 text-white dark:bg-yellow-400 dark:text-black'
                  : 'bg-gray-300 text-black dark:bg-gray-700 dark:text-white'
              }`}
            >
              {category === 'videoEditing' ? 'Video Editing' : 'Graphic Design'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects[activeCategory].length > 0 ? (
            projects[activeCategory].map((item) => (
              <div key={item.id} className="relative bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                {activeCategory === 'videoEditing' ? (
                  <iframe
                    src={item.src}
                    title={item.title}
                    className="w-full h-64 object-cover"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full aspect-square">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-500 dark:text-gray-400 col-span-full"></p>
          )}
        </div>

        {/* Additional Sections - Only for Video Editing */}
        {activeCategory === 'videoEditing' && (
          <>
            {/* Podcast Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">🎙️ Podcast</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "https://www.youtube.com/embed/aPcA7BgGhT0?si=2p6LhVNqtGGa1e0g",
                  "https://www.youtube.com/embed/YHU7NVFrpI4",
                ].map((src, index) => (
                  <iframe
                    key={index}
                    className="w-full aspect-video rounded-xl shadow-xl transition-transform hover:scale-105"
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            </div>

            {/* Viral Videos Section */}
            <div className="mt-16 py-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">🔥 Viral Videos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { src: "/5.5M.png", link: "https://youtube.com/shorts/L_4a8CcQHo0?si=1DTMHzKVOZtUAbW4" },
                  { src: "/3.6.png", link: "https://www.instagram.com/reel/CvaKtRQARr0/" },
                  { src: "/10M.png", link: "https://youtube.com/shorts/ZcboBHn-lNk?si=f3zthBR6R_TVTbWg" },
                  { src: "/4.6.png", link: "https://www.instagram.com/reel/CukHO7tAfTK/" },
                ].map((video, index) => (
                  <a
                    key={index}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                  >
                    <img src={video.src} alt={`Viral Video ${index + 1}`} className="w-full h-full object-cover" />
                  </a>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">📽️ Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "https://www.youtube.com/embed/6j5IIw9Pulk?si=JqId8cn3AyExz_U9",
                  "https://www.youtube.com/embed/1FJat0b9qp8?si=vg-_qaWH2Tc7t8sF",
                ].map((src, index) => (
                  <iframe
                    key={index}
                    className="w-full aspect-video rounded-xl shadow-xl transition-transform hover:scale-105"
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
