// components/KinmarvelSupport.tsx

import React from "react";

const KinmarvelSupport = () => {
  return (
    <section
      id="kinsupport"
      className="px-4 py-10 md:px-10 lg:px-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          KinMarvel Child Safety Policy
        </h2>
        <p className="mb-4">
          KinMarvel is committed to protecting children and preventing any form
          of sexual abuse or exploitation on our platform.
        </p>
        <p className="mb-4">
          We have implemented reporting mechanisms, content moderation, and
          follow strict community guidelines to ensure user safety.
        </p>
        <p className="mb-4">
          Any content that violates these policies is immediately removed, and
          appropriate action is taken including reporting to relevant
          authorities.
        </p>
        <p className="mb-6">
          Users can report issues via the in-app reporting feature or contact us
          at{" "}
          <a
            href="mailto:amtejayant@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            amtejayant@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default KinmarvelSupport;
