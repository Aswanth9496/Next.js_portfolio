"use client";
import React, { useEffect, useRef } from "react";

const HeroCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Cursor tracking placeholder — add rAF-throttled ref-based updates here
    // if a visual cursor effect is needed in the future.
    // No state updates: prevents ~60 re-renders/sec from mousemove.
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] flex items-center justify-center w-screen overflow-hidden"
    />
  );
};

export default HeroCursor;

