import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const SlowMouseMovement = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  // Throttle the handleMouseMove function to limit the number of calls
  const throttledMouseMove = _.throttle(handleMouseMove, 100);

  useEffect(() => {
    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  // Function to make the movement slower
  const slowMovement = (current, target, factor = 0.1) => {
    return current + (target - current) * factor;
  };

  return (
      <div
        style={{
          position: 'absolute',
          top: slowMovement(position.y, position.y),
          left: slowMovement(position.x, position.x),
          backgroundColor: 'transparent',
          borderRadius: '50%'
        }}
      />
  );
};

export default SlowMouseMovement;
