import "./Butterflies.css";

function Butterflies() {
  return (
    <div className="butterflies-container">
      <img
        src="/images/butterflies/pink.png"
        className="flying-butterfly pink-butterfly"
        alt=""
      />

      <img
        src="/images/butterflies/lavender.png"
        className="flying-butterfly lavender-butterfly"
        alt=""
      />

      <img
        src="/images/butterflies/blue.png"
        className="flying-butterfly blue-butterfly"
        alt=""
      />
    </div>
  );
}

export default Butterflies;