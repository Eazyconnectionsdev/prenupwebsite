"use client"

const tick = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="ml-2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12L10 17L20 7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const BeforeFooter = () => {
  return (
    <section
      className={`bg-gradient-to-r from-primary to-secondary relative py-10`}
    >
      <div className="absolute bottom-0 hidden md:flex mx-auto w-full justify-center bg-black text-white text-[14px] bg-opacity-30 py-2">
        {tick}
        Free Contact Credit Every Month{" "}
        {tick}Instant access{" "}
        {tick}
        GDPR aligned & CCPA aligned{" "}
        {tick}Monthly & yearly contracts{" "}
        {tick}Cancel anytime
      </div>
      <div className="container flex flex-col items-center px-5 pt-8 pb-20 mx-auto md:px-0">
        <h4 className="text-[20px] md:text-[28px] text-white font-bold text-center">
          Reach your ideal customer with EazyConnections
        </h4>
        <div className="  flex flex-col md:flex-row flex-1 mt-6 gap-2 md:w-[650px] items-center justify-center ">
          <div className="flex p-1 bg-white rounded ">
            <input
              type="email"
              placeholder="Enter Your Work Email"
              className="flex-1 w-full px-2 bg-white rounded focus:outline-none"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <button  className="px-5 py-2 font-medium text-black transition-all duration-300 ease-in-out bg-yellow-400 rounded hover:bg-yellow-500">
              Free SignUp
            </button>
          </div>
          <button  className="px-5 py-3 font-medium text-black transition-all duration-300 ease-in-out bg-yellow-400 rounded hover:bg-yellow-500">
            Talk To Sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default BeforeFooter