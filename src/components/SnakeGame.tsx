"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Play, RotateCcw } from "lucide-react";

const GRID_SIZE = 15;
const INITIAL_SNAKE = [[7, 7], [7, 8]];
const INITIAL_DIRECTION = [0, -1]; // Moving Up

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState([3, 3]);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const generateFood = useCallback(() => {
    let newFood;
    while (true) {
      newFood = [
        Math.floor(Math.random() * GRID_SIZE),
        Math.floor(Math.random() * GRID_SIZE),
      ];
      const isOnSnake = snake.some(
        (segment) => segment[0] === newFood[0] && segment[1] === newFood[1]
      );
      if (!isOnSnake) break;
    }
    setFood(newFood);
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (!isPlaying || isGameOver) return;

    const newSnake = [...snake];
    const head = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];

    // Wall Collision
    if (
      head[0] < 0 || head[0] >= GRID_SIZE ||
      head[1] < 0 || head[1] >= GRID_SIZE
    ) {
      setIsGameOver(true);
      return;
    }

    // Self Collision
    if (newSnake.some(s => s[0] === head[0] && s[1] === head[1])) {
       setIsGameOver(true);
       return;
    }

    newSnake.unshift(head);

    // Food Collision
    if (head[0] === food[0] && head[1] === food[1]) {
      setScore(s => s + 10);
      generateFood();
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, isPlaying, isGameOver, food, generateFood]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [moveSnake]);

  // Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": if (direction[1] !== 1) setDirection([0, -1]); break;
        case "ArrowDown": if (direction[1] !== -1) setDirection([0, 1]); break;
        case "ArrowLeft": if (direction[0] !== 1) setDirection([-1, 0]); break;
        case "ArrowRight": if (direction[0] !== -1) setDirection([1, 0]); break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  // Touch Controls (Simple Direction Detection)
  const touchStart = useRef<[number, number] | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = [e.touches[0].clientX, e.touches[0].clientY];
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current[0];
    const dy = e.changedTouches[0].clientY - touchStart.current[1];
    
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 30 && direction[0] !== -1) setDirection([1, 0]);
      else if (dx < -30 && direction[0] !== 1) setDirection([-1, 0]);
    } else {
      if (dy > 30 && direction[1] !== -1) setDirection([0, 1]);
      else if (dy < -30 && direction[1] !== 1) setDirection([0, -1]);
    }
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setIsGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div 
      className="relative w-full h-full bg-black/20 rounded-2xl overflow-hidden flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary">Score: {score}</span>
        {isGameOver && <span className="text-[10px] font-mono text-red-500 uppercase font-bold">Terminal Error</span>}
      </div>

      {/* Game Board */}
      <div className="flex-1 grid grid-cols-15 grid-rows-15 p-1 gap-px bg-white/5 border border-white/10 m-4 rounded-lg">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);
          const isSnake = snake.some(s => s[0] === x && s[1] === y);
          const isHead = snake[0][0] === x && snake[0][1] === y;
          const isFood = food[0] === x && food[1] === y;

          return (
            <div 
              key={i} 
              className={`rounded-[2px] transition-all duration-200 ${
                isHead ? "bg-primary scale-110 shadow-[0_0_10px_rgba(var(--primary),0.5)]" : 
                isSnake ? "bg-primary/40" : 
                isFood ? "bg-red-500 animate-pulse" : 
                "bg-transparent"
              }`} 
            />
          );
        })}
      </div>

      {/* Overlays */}
      {(!isPlaying || isGameOver) && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-4 z-20">
          <div className="text-center space-y-2">
            <h4 className="text-xl font-bold tracking-tighter uppercase">{isGameOver ? "Unit Failed" : "Unit: Recreation"}</h4>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              {isGameOver ? "Score saved to architecture" : "Interactive Recreation Module"}
            </p>
          </div>
          <button 
            onClick={isGameOver ? resetGame : () => setIsPlaying(true)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:scale-110 transition-transform active:scale-95"
          >
            {isGameOver ? <><RotateCcw size={16} /> Reconnect</> : <><Play size={16} /> Initialise</>}
          </button>
        </div>
      )}
      
      {/* Mobile Hint */}
      <div className="pb-4 text-center md:hidden">
        <span className="text-[8px] font-mono uppercase opacity-30 tracking-widest">Swipe to override direction</span>
      </div>
    </div>
  );
}
