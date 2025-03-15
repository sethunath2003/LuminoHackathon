import React from "react";

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "Head of Media Production", image: "https://via.placeholder.com/150" },
  { name: "Emily Johnson", role: "Marketing Manager", image: "https://via.placeholder.com/150" },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-purple-400">About ABC Studios</h1>
        <p className="mt-4 text-lg text-gray-300">
          Elevating media, esports, and event management with passion and innovation.
        </p>
      </div>

      {/* Vision, Mission, Core Values */}
      <div className="mt-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-pink-400">Our Vision</h2>
        <p className="text-gray-400 mt-2">To be the leading force in digital entertainment and event solutions.</p>

        <h2 className="text-3xl font-semibold text-blue-400 mt-8">Our Mission</h2>
        <p className="text-gray-400 mt-2">
          We deliver cutting-edge solutions in live streaming, media production, digital marketing, and esports.
        </p>

        <h2 className="text-3xl font-semibold text-green-400 mt-8">Our Core Values</h2>
        <ul className="text-gray-400 mt-2 space-y-2">
          <li>🚀 Innovation</li>
          <li>🤝 Collaboration</li>
          <li>🔥 Passion for Creativity</li>
          <li>🎯 Excellence in Execution</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-semibold text-center text-yellow-400">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
