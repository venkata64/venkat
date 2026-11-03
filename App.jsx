import { useState,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Butterflies from "./components/Butterflies";
import RosePetals from "./components/RosePetals";
import UnspokenDiary from "./components/UnspokenDiary";
import HopeForTomorrow from "./components/HopeForTomorrow";
import FinalSurprise from "./components/FinalSurprise";
import {
  Heart,
  Moon,
  Stars,
  Flower2,
  Lock,
  Gift,
  Mail,
  Sparkles,
  ArrowDown,
  X
} from "lucide-react";

import "./App.css";

const messages = [
  {
    title: "Your feelings matter",
    text: "I may not always understand everything, but I want to learn to listen better."
  },
  {
    title: "I am learning",
    text: "I cannot change yesterday, but I can take responsibility for my actions."
  },
  {
    title: "No pressure",
    text: "You deserve your own time, space and peace."
  }
];

function App() {
  const [started, setStarted] = useState(false);
  const [activeLetter, setActiveLetter] = useState(false);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
   // MUSIC STATES
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  // START JOURNEY AND MUSIC
  const beginJourney = async () => {
    setStarted(true);

    try {
      await audioRef.current.play();
      setMusicOn(true);
    } catch (error) {
      console.log("Music could not start:", error);
    }
  };

  // MUSIC ON / OFF
  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      try {
        await audioRef.current.play();
        setMusicOn(true);
      } catch (error) {
        console.log("Music could not start:", error);
      }
    }
  };
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="website">
    <RosePetals />
    <Butterflies />

    <audio
    ref={audioRef}
    src="/music/background-music.mp3"
    loop
    preload="auto"
  />
    

      {/* BACKGROUND PARTICLES */}

      <div className="particles">
        {Array.from({ length: 45 }).map((_, i) => (
          <motion.span
            key={i}
            className="particle"
            initial={{
              y: "110vh",
              opacity: 0
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 0.4, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}
          />
        ))}

      </div>
      {/* MAGICAL FLOATING DECORATIONS */}

<div className="floating-decorations">

  <span className="floating-rose rose-one">🌹</span>
  <span className="floating-rose rose-two">🌸</span>
  <span className="floating-rose rose-three">🌹</span>
  <span className="floating-rose rose-four">🌺</span>


  <span className="floating-star star-one">✦</span>
  <span className="floating-star star-two">✧</span>
  <span className="floating-star star-three">✦</span>

</div>

      {/* NAVIGATION */}

    {started && (
  <>
    <nav className="navbar">
      <div className="logo">
        <Heart size={20} fill="currentColor" />
        <span>Unspoken Feelings</span>
      </div>

      <div className="nav-links">
        <button onClick={() => scrollTo("feelings")}>
          Feelings
        </button>

        <button onClick={() => scrollTo("apology")}>
          Apology
        </button>

        <button onClick={() => scrollTo("memories")}>
          Memories
        </button>

        <button onClick={() => scrollTo("letter")}>
          Letter
        </button>
      </div>
    </nav>

    <motion.button
      className="music-toggle"
      onClick={toggleMusic}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {musicOn ? "🎵 Music On" : "🔇 Music Off"}
    </motion.button>
  </>
)}

      <AnimatePresence mode="wait">

        {!started ? (

          /* OPENING SCREEN */

          <motion.section
            className="hero"
            key="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
          >

            <motion.div
              className="moon"
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              <Moon size={85} strokeWidth={1} />
            </motion.div>

            <motion.div
              className="hero-heart"
              animate={{
                scale: [1, 1.12, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <Heart
                size={55}
                fill="#e98aaa"
                color="#e98aaa"
              />
            </motion.div>

            <p className="eyebrow">
              A PERSONAL DIGITAL JOURNEY
            </p>

            <h1>
              A World of
              <br />
              <span>Unspoken Feelings</span>
            </h1>

            <p className="hero-description">
              Some feelings are difficult to express.
              <br />
              Some words remain unspoken.
              <br />
              This little world holds them all.
            </p>

            <motion.button
              className="primary-button"
              onClick={beginJourney}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin the Journey
              <Heart size={18} />
            </motion.button>

            <p className="bottom-note">
              Made with sincerity ❤️
            </p>

          </motion.section>

        ) : (

          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >

            {/* FEELINGS SECTION */}

            
<motion.section
  id="feelings"
  className="section feelings-section"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <h2>Feelings I Never Knew How to Express</h2>

  <p className="feelings-intro">
    Some feelings are too beautiful to be explained in words.
    Choose a little heart and discover what's inside.
  </p>

  <div className="feelings-grid">
    {[
      {
        icon: "❤️",
        title: "What You Mean to Me",
        message:
          "You are someone who became special to me in ways I cannot fully explain."
      },
      {
        icon: "🌸",
        title: "The Little Things",
        message:
          "Sometimes the smallest moments become the memories we treasure the most."
      },
      {
        icon: "🦋",
        title: "What I Never Said",
        message:
          "There were so many things in my heart that I couldn't find the right words to say."
      },
      {
        icon: "✨",
        title: "My Wish for You",
        message:
          "I hope your days are filled with happiness, beautiful moments, and countless reasons to smile."
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="feeling-card"
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.97 }}
        onClick={(event) =>
          event.currentTarget.classList.toggle("flipped")
        }
      >
        <div className="feeling-card-inner">
          <div className="feeling-card-front">
            <span className="feeling-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>Click to discover</p>
          </div>

          <div className="feeling-card-back">
            <span className="feeling-icon">{item.icon}</span>
            <p>{item.message}</p>
            <small>With feelings 💜</small>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>


            {/* APOLOGY SECTION */}

<motion.section
  id="apology"
  className="section apology"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>

  <Flower2 size={38} color="#ed9db8" />

  <p className="eyebrow">
    CHAPTER 02
  </p>

  <h2>
    If I Could Turn
    <br />
    <span>Back Time</span>
  </h2>

  <p className="apology-intro">
    Some words are difficult to say, but they deserve to be expressed.
  </p>

  <details className="apology-envelope">

    <summary>
      <div className="envelope-icon">
        💌
      </div>

      <h3>A Letter From My Heart</h3>

      <p>Click to open your letter</p>

      <span className="open-letter">
        Open Letter ✨
      </span>
    </summary>

    <div className="apology-letter">

      <div className="letter-decoration">🌹</div>

      <h3>I'm Truly Sorry</h3>

      <p>
        I know we had an argument.
        I know things may not feel the same right now.
      </p>

      <p>
        I don't want to make excuses or ignore
        your feelings.
      </p>

      <p>
        I wish I had handled things differently.
        I want to learn from what happened
        and become better.
      </p>

      <p className="highlight-text">
        I am sorry for my part in what happened.
      </p>

      <p>
        I cannot change what happened in the past,
        but I can learn from it and try to do better.
      </p>

      <p className="letter-ending">
        With a sincere heart, 💜
      </p>

    </div>

  </details>

</motion.section>

           
{/* MEMORIES SECTION */}

<section id="memories" className="section memories-section">

  <p className="eyebrow">CHAPTER 03</p>

  <h2>
    Some Moments
    <br />
    <span>Stay Forever</span>
  </h2>

  <p className="memories-intro">
    Not every memory needs a photograph.
    Some moments are safely kept in the heart.
  </p>

  <div className="memories-grid">

    {[
      {
        icon: "🌸",
        title: "The Little Moments",
        message:
          "Sometimes ordinary conversations become the moments we wish we could experience again."
      },
      {
        icon: "😊",
        title: "The Smiles",
        message:
          "A simple smile can make an ordinary day feel a little more beautiful."
      },
      {
        icon: "🦋",
        title: "The Unexpected",
        message:
          "Some people enter our lives unexpectedly and become someone we never want to forget."
      },
      {
        icon: "🌙",
        title: "The Unspoken",
        message:
          "There are feelings and memories that words can never completely describe."
      }
    ].map((memory, index) => (

      <motion.div
        key={index}
        className="memory-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        whileHover={{ scale: 1.04, y: -8 }}
      >

        <div className="memory-icon">
          {memory.icon}
        </div>

        <h3>{memory.title}</h3>

        <p>{memory.message}</p>

        <span className="memory-star">✦</span>

      </motion.div>

    ))}

  </div>

  <p className="memory-ending">
    "Some memories are not captured by cameras,
    but are remembered by hearts."
  </p>

</section>


           
{/* PERSONAL LETTER SECTION */}

<section id="letter" className="section personal-letter-section">

  <p className="eyebrow">CHAPTER 04</p>

  <h2>
    A Letter
    <br />
    <span>From My Heart</span>
  </h2>

  <p className="letter-intro">
    There are things I may not always know how to say,
    so I wanted to write them here.
  </p>

  <motion.div
    className="heart-letter"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >

    <div className="letter-top-decoration">✦ 🌹 ✦</div>

    <h3>Dear Someone Special,</h3>

    <p>
      I don't know where to begin, because some feelings
      are difficult to put into words.
    </p>

    <p>
      You became a special part of my world, and even
      the little moments connected to you mean something
      to me.
    </p>

    <p>
      Hey pilla,naku telusu inka neku kopam tagaledhu ani,ah baga chestunavu ga,
      kopam vastey evarina mataladakunda untara ah cheppu potti dana,kopam lo 64
      ni beat chesey dani laga unnavu ga ah😁,sare ley oppukuntunna ley 64 ni beat cheavu ley 
      pilla,sare sry ey babu ela mouna ratham cheyaka or matldakunda undaka okay na😊,
      and inka cheppali antey naku estam kopam teppinchali neku ani but ela matldakunda undatam kadu 
      okay,neney kopam tepinchi,neney malla vachi request cheyatam like matladu,matladu 
      ani anatam baguntadi,ah feel sariga untadi ❤️,so antey tappa vere emi ley ,but kopam lo luda baguntavu 
      pilla 💕
    </p>

    <p>
      Dayachesi ela mouna ratham cheyaka ey babu neku okka 🙏 ey pilla😁😁
    </p>

    <p>
     last ga cheptunna vinu,i dont want to lose u thats it 😉💖
    </p>

    <p className="letter-signature">
      With all my unspoken feelings, <br />
      Someone who cares 💜
    </p>

    <div className="letter-bottom-decoration">🦋</div>

  </motion.div>

</section>
<UnspokenDiary />
<HopeForTomorrow />
<FinalSurprise />


            {/* FINAL SURPRISE */}

  

          </motion.main>

        )}

      </AnimatePresence>

      {/* LETTER POPUP */}

      <AnimatePresence>
        {activeLetter && (

          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="letter-modal"
              initial={{ y: 100, scale: 0.8 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >

              <button
                className="close-button"
                onClick={() => setActiveLetter(false)}
              >
                <X />
              </button>

              <Heart
                color="#db7799"
                fill="#db7799"
              />

              <h2>Dear Someone Special,</h2>

              <p>
                I know things are not perfect between us.
                I just wanted to express something sincerely.
              </p>

              <p>
                I am sorry for my mistakes.
                I don't expect you to forget what happened.
                I only hope I can learn and do better.
              </p>

              <p>
                Your feelings deserve to be heard
                and respected.
              </p>

              <p className="signature">
                With sincerity ❤️
              </p>

            </motion.div>

          </motion.div>
          

        )}
      </AnimatePresence>

      {/* SURPRISE POPUP */}

      

    </div>
  );
}

export default App;