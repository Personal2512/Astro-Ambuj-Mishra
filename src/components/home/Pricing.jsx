export default function Pricing() {
  const plans = [
    [
      "Basic Kundli",
      "₹1101",
      ["Chart overview", "Basic remedies", "PDF report"],
    ],
    [
      "Premium Consultation",
      "₹2101",
      [
        "51 Minutes Call duration",
        "1-on-1 Consultation",
        "Detailed guidance",
        "Personal remedies",
      ],
    ],
    [
      "Complete Life Report",
      "₹5101",
      ["Career", "Marriage", "Finance", "Health", "Yearly forecast"],
    ],
  ];

  return (
    <section id="pricing" className="bg-cream px-5 py-24 text-midnight">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* <p className="font-semibold text-teal">Pricing</p> */}
          <h2 className="mt-3 font-display text-4xl font-bold">
            Choose Your Astrology Plan
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map(([name, price, features], index) => (
            <div
              key={name}
              className={`rounded-[2rem] p-8 shadow-xl flex flex-col h-full ${
                index === 1
                  ? "bg-midnight text-cream"
                  : "bg-white text-midnight"
              }`}
            >
              <h3 className="font-display text-3xl font-bold">{name}</h3>
              <p
                className={`mt-5 text-4xl font-bold ${
                  index === 1 ? "text-white" : "text-gold"
                }`}
              >
                {price}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-gold px-6 py-4 font-bold text-midnight">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
