import React from "react";

const FreeConsultation = () => {
  return (
    <section className="py-28 max-w-[1200px] mx-auto px-4 flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center text-center mt-8 mb-3 px-6 max-w-3xl relative">
        <div className="w-max flex flex-col justify-start">
          <h3 className=" font-semibold text-3xl mb-2 text-left">
            Book a meeting with an expert
          </h3>
        </div>

        <p className="text-[15px]">
          Book a demo! If you have any general inquiries or questions about
          specific departments, you can use any of the options listed below.
        </p>
        <p className="text-navy-deep text-[13px] mt-6">
          Trusted by companies all over the world for reliable and accurate
          contact data.
        </p>
      </div>

      <div className="w-full mt-10 flex justify-center items-center mb-8 overflow-hidden">
        <iframe
          src="https://meetings-eu1.hubspot.com/eazy-connection"
          className="max-w-4xl h-[800px] w-[700px] border-none rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default FreeConsultation;
