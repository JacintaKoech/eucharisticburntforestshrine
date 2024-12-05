import React from 'react';

const About = () => {
  return (
    <main className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-shrine-primary text-center mb-6">
          About Us
        </h1>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-shrine-dark mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The <strong>Eucharistic Burnt Forest Shrine</strong> is a sacred
            space dedicated to fostering faith, community, and spiritual
            reflection. Situated in the heart of Burnt Forest, our shrine
            serves as a beacon of hope and unity, inviting everyone to deepen
            their relationship with God and find solace in His presence.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-shrine-dark mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide a sanctuary for worship, prayer, and
            reflection. We strive to nurture faith through the Eucharist and
            inspire individuals and families to live out their Christian
            values. By promoting peace, reconciliation, and spiritual growth,
            we aim to transform lives and build a stronger, more united
            community.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-shrine-dark mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where the Eucharist serves as the center of
            every believer’s life, radiating love, hope, and unity. Through our
            shrine, we aspire to be a place where people from all walks of life
            can encounter God’s transformative power and embrace their faith
            journey with renewed strength and purpose.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-shrine-dark mb-4">
            Our History
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Established in response to the growing spiritual needs of the Burnt
            Forest community, the shrine has become a symbol of faith and
            resilience. Over the years, we have hosted countless worshippers,
            pilgrims, and visitors seeking God’s presence and guidance. Today,
            the shrine stands as a testament to the enduring power of faith and
            the importance of community in overcoming life’s challenges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-shrine-dark mb-4">
            Join Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re looking for a place to worship, a community to grow
            with, or simply a quiet space for reflection, the Eucharistic Burnt
            Forest Shrine welcomes you with open arms. Explore our{" "}
            <a href="/events" className="text-shrine-primary hover:underline">
              events
            </a>, learn about our{" "}
            <a href="/messages" className="text-shrine-primary hover:underline">
              messages
            </a>, or contact us to learn more about how you can get involved.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
