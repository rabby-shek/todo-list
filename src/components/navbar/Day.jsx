import React, { useState, useEffect } from 'react';

const Day = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const dayOptions = { weekday: 'long' };
  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  const day = time.toLocaleDateString(undefined, dayOptions);
  const date = time.toLocaleDateString(undefined, dateOptions);
  const digitalTime = time.toLocaleTimeString(undefined, timeOptions);

  return (
    <div>
      <div>{date} - {day}</div>
      <div>{digitalTime}</div>
    </div>
  );
}

export default Day;
