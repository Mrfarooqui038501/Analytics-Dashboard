import React from 'react';

export default function Skeleton({ height = 20, width = '100%', count = 1, style = {} }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            width,
            height,
            background: 'linear-gradient(90deg, #ececec 25%, #f3f3f3 37%, #ececec 63%)',
            borderRadius: 8,
            marginBottom: 6,
            animation: 'skeleton-shine 1.5s infinite',
            ...style
          }}
          className="skeleton"
        />
      ))}
    </>
  );
}
