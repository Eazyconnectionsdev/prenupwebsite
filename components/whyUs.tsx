import { ShieldCheck, Users2, Clock } from "lucide-react";


const items = [
  {
    icon: <Users2 className="w-8 h-8 " />,
    title: "Built for Couples, Not Individuals",
    description:
      "Work together seamlessly on a transparent, fair, and collaborative prenuptial agreement designed for both partners.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 " />,
    title: "Independent Access to Top-Tier Family Lawyers*",
    description:
      "Both partners receive guidance from their own independent family lawyer for clarity and legal confidence.",
    note: "*We are not a law firm and do not provide legal advice ourselves.",
  },
  {
    icon: <Clock className="w-8 h-8 " />,
    title: "Fast, Affordable & 100% Online",
    description:
      "Create your entire agreement online—quick, budget-friendly, simple, and stress-free for both partners.",
  },
];


const WhyUs = () => {
  return (
    <section className="w-full relative py-24 bg-white">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-indigo-200/40 rounded-full blur-[120px] -top-10 -left-10" />
        <div className="absolute w-72 h-72 bg-purple-200/40 rounded-full blur-[120px] bottom-0 right-0" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep">
          Why Choose Us?
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          A modern, transparent, and collaborative way to create your prenuptial
          agreement — built for both partners.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 mb-6 group-hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300">
                <div className="group-hover:text-white transition">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-navy-deep mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-2">
                {item.description}
              </p>

              {item.note && (
                <p className="text-sm text-gray-500 mt-3">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
