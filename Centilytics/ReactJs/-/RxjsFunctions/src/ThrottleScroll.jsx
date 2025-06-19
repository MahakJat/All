import React, { useEffect, useRef, useState } from 'react';
import { fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

function MouseThrottleBox() {
  const boxRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove$ = fromEvent(boxRef.current, 'mousemove').pipe(
      throttleTime(500), // emit at most once every 500ms
      map((event) => ({
        x: event.offsetX,
        y: event.offsetY
      }))
    );

    const subscription = mouseMove$.subscribe((pos) => {
      console.log('Throttled Mouse Position:', pos);
      setPosition(pos);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h2>Throttle Mouse Move (500ms)</h2>
      <div
        ref={boxRef}
        style={{
          width: '400px',
          height: '200px',
          border: '2px solid blue',
          margin: '20px auto',
          position: 'relative',
          userSelect: 'none'
        }}
      >
        <p style={{ position: 'absolute', top: 10, left: 10 }}>
          X: {position.x}, Y: {position.y}
        </p>
      </div>
    </div>
  );
}

export default MouseThrottleBox;
