import React from 'react'

export default function Text({
  title,
  color,
  variant,
  weight,
  decoration,
  style,
  lineHeight,
  letterSpacing,
}) {
  return (
    <>
      <div
        className={`text-${color} ${variant}`}
        style={{
          fontWeight: `${weight}`,
          textDecoration: `${decoration}`,
          fontStyle: `${style}`,
          lineHeight: `${lineHeight}`,
          letterSpacing: `${letterSpacing}`,
        }}
      >
        {title}
      </div>
    </>
  );
}
