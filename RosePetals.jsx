import { useEffect, useState } from "react";

function RosePetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals = Array.from(
        { length: 18 },
        (_, index) => ({
          id: `${Date.now()}-${index}`,
          left: Math.random() * 100,
          duration: 8 + Math.random() * 8,
          delay: Math.random() * 5,
          size: 12 + Math.random() * 15,
          rotation: Math.random() * 360
        })
      );

      setPetals(newPetals);
    };

    createPetals();

    const interval = setInterval(createPetals, 14000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rose-petals-container">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="falling-petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            fontSize: `${petal.size}px`,
            "--rotation": `${petal.rotation}deg`
          }}
        >
          🌹
        </span>
      ))}
    </div>
  );
}

export default RosePetals;