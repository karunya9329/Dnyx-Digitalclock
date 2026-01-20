import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const padZero = (num) => String(num).padStart(2, "0");

  const hours = padZero(time.getHours());
  const minutes = padZero(time.getMinutes());
  const seconds = padZero(time.getSeconds());

  const date = time.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="bg-black/40 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center text-white">
        <h1 className="text-7xl font-bold tracking-widest">
          {hours}:{minutes}:{seconds}
        </h1>
        <p className="mt-4 text-xl text-gray-200">{date}</p>
      </div>
    </div>
  );
};

export default DigitalClock;
