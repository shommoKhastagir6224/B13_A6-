import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// motion is used in motion.div and motion.button components

const initialCards = [
  {
    id: 1,
    title: "Starter",
    price: "$9",
    desc: "Perfect for getting started",
    description: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    btn_card: "Get Started Free",
  },
  {
    id: 2,
    title: "Pro",
    price: "$29",
    desc: "Best for professionals.",
    description: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    btn_card: "Start Pro Trial",
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$99",
    desc: "For teams and businesses.",
    description: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    btn_card: "Contact Sales",
  },
];

const Offer = () => {
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const updated = [...prev];
        const first = updated.shift();
        updated.push(first);
        return updated;
      });
    }, 5000); // 5 sec rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="py-20 bg-base-200 overflow-hidden">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-36">
          <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h1>
          <p className="text-gray-500">
            Flexible pricing options designed for individuals and businesses.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex justify-center items-center gap-6 relative flex-wrap md:flex-nowrap">
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => {
              const isActive = index === 1; // Center card

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1.15 : 0.9,
                    y: isActive ? -25 : 0,
                  }}
                  transition={{
                    duration: 2,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className={`
                  card w-72 p-6 shadow-xl rounded-2xl
                  ${
                    isActive
                      ? "bg-linear-to-r from-blue-800 to-purple-700 text-white z-10 shadow-2xl"
                      : "bg-base-300"
                  }
                `}
                >
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p className="text-sm opacity-80">{card.desc}</p>
                  <p className="text-3xl font-bold my-3">
                    {card.price}{" "}
                    <span className="text-lg font-semibold">/ Month</span>{" "}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {card.description.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-green-300">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`btn w-full ${isActive ? "" : " bg-linear-to-b from-blue-500 to-purple-500"}`}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.btn_card}
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-6 text-center rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Clipboards to
          work smarter. Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className=" btn btn-outlin rounded-4xl">Explore Products</button>
          <button className="btn btn-outline rounded-4xl">View Pricing</button>
        </div>

        {/* Footer text */}
        <p className="text-sm opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </>
  );
};

export default Offer;
