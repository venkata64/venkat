import { useState, useEffect } from "react";
import "./UnspokenDiary.css";

function UnspokenDiary() {
  const [thought, setThought] = useState("");
  const [entries, setEntries] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("unspoken-diary") || "[]"
      );
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "unspoken-diary",
      JSON.stringify(entries)
    );
  }, [entries]);

  const saveEntry = () => {
    if (!thought.trim()) return;

    const newEntry = {
      id: Date.now(),
      text: thought.trim(),
      date: new Date().toLocaleString()
    };

    setEntries([newEntry, ...entries]);
    setThought("");
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <section id="diary" className="section diary-section">

      <p className="eyebrow">CHAPTER 05</p>

      <h2>
        My Unspoken
        <br />
        <span>Words</span>
      </h2>

      <p className="diary-intro">
        A little place for thoughts that never found
        their way into words.
      </p>

      <div className="diary-container">

        <div className="diary-heading">
          <span>📖</span>
          <h3>My Secret Diary</h3>
          <span>🌙</span>
        </div>

        <textarea
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          placeholder="Write whatever your heart wants to say..."
          rows="5"
        />

        <button
          className="diary-save-button"
          onClick={saveEntry}
        >
          Save My Thoughts 💌
        </button>

        <div className="diary-entries">

          <h3>My Written Feelings ✨</h3>

          {entries.length === 0 ? (
            <p className="empty-diary">
              Your diary is waiting for its first story...
              🌸
            </p>
          ) : (
            entries.map((entry) => (
              <div className="diary-entry" key={entry.id}>

                <small>{entry.date}</small>

                <p>{entry.text}</p>

                <button
                  className="diary-delete-button"
                  onClick={() => deleteEntry(entry.id)}
                >
                  Delete
                </button>

              </div>
            ))
          )}

        </div>

      </div>

      <p className="diary-ending">
        "Some words are never spoken.
        They simply live inside the heart." 💜
      </p>

    </section>
  );
}

export default UnspokenDiary;