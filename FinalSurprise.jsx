import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FinalSurprise.css";

function FinalSurprise() {
  const [opened, setOpened] = useState(false);

  return (
    <section id="surprise" className="section final-surprise">

      <p className="eyebrow">THE FINAL CHAPTER</p>

      <h2>
        Something
        <br />
        <span>Special For You</span>
      </h2>

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            key="gift"
            className="surprise-gift"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
          >

            <div className="gift-icon">🎁</div>

            <h3>A Little Surprise</h3>

            <p>
              There is something I have kept especially
              for this moment.
            </p>

            <button onClick={() => setOpened(true)}>
              Open Your Surprise ✨
            </button>

          </motion.div>

        ) : (

          <motion.div
            key="reveal"
            className="drawing-reveal"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >

            <h3>Something From My Heart 💜</h3>

            <p className="drawing-intro">
              This is not just a drawing.
              It is something I created with my own hands
              and feelings.
            </p>

            <motion.img
              src="/images/surprise/my-drawing.png"
              alt="My original hand-drawn surprise"
              className="original-drawing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1.5 }}
            />

            <p className="drawing-ending">
              Some feelings cannot be explained in words.
              Sometimes, they are simply drawn from the heart. 🌹
            </p>

            <button
              className="replay-button"
              onClick={() => setOpened(false)}
            >
              Experience Again ↻
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default FinalSurprise;