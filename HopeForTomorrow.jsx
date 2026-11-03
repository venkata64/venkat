import { motion } from "framer-motion";
import "./HopeForTomorrow.css";

function HopeForTomorrow() {
  const wishes = [
    {
      icon: "🌸",
      title: "More Happiness",
      text: "May every new day bring beautiful reasons to smile."
    },
    {
      icon: "🦋",
      title: "New Beginnings",
      text: "May tomorrow bring fresh opportunities and beautiful experiences."
    },
    {
      icon: "✨",
      title: "Beautiful Memories",
      text: "May life give us moments worth remembering forever."
    }
  ];

  return (
    <section id="hope" className="section hope-section">

      <p className="eyebrow">CHAPTER 06</p>

      <h2>
        A Little Hope
        <br />
        <span>For Tomorrow</span>
      </h2>

      <div className="hope-moon">🌙</div>

      <motion.p
        className="hope-message"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        No matter what yesterday brought,
        tomorrow is another chance to grow,
        understand, forgive, and find happiness.
      </motion.p>

      <div className="hope-wishes">

        {wishes.map((wish, index) => (
          <motion.div
            className="hope-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.04 }}
          >
            <span>{wish.icon}</span>
            <h3>{wish.title}</h3>
            <p>{wish.text}</p>
          </motion.div>
        ))}

      </div>

      <motion.div
        className="hope-final-message"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span>✦</span>

        <p>
          "Even after the darkest night,
          the stars remind us that light always finds a way."
        </p>

        <span>✦</span>
      </motion.div>

    </section>
  );
}

export default HopeForTomorrow;