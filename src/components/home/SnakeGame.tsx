'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

// Game constants
const GRID_SIZE = 15;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;
const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

type Position = {
  x: number;
  y: number;
};

type GameState = 'start' | 'playing' | 'gameover';

const SnakeGame = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [snake, setSnake] = useState<Position[]>([{ x: 7, y: 7 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [score, setScore] = useState(0);
  const [nextDirection, setNextDirection] = useState(DIRECTIONS.RIGHT);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  // Generate random food position
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    
    // Make sure food doesn't appear on snake
    const isOnSnake = snake.some(segment => 
      segment.x === newFood.x && segment.y === newFood.y
    );
    
    if (isOnSnake) {
      return generateFood();
    }
    
    return newFood;
  }, [snake]);

  // Start game
  const startGame = () => {
    setGameState('playing');
    setSnake([{ x: 7, y: 7 }]);
    setFood(generateFood());
    setDirection(DIRECTIONS.RIGHT);
    setNextDirection(DIRECTIONS.RIGHT);
    setScore(0);
  };

  // Game over
  const endGame = () => {
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
      gameLoopRef.current = null;
    }
    setGameState('gameover');
  };

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== DIRECTIONS.DOWN) {
            setNextDirection(DIRECTIONS.UP);
          }
          break;
        case 'ArrowDown':
          if (direction !== DIRECTIONS.UP) {
            setNextDirection(DIRECTIONS.DOWN);
          }
          break;
        case 'ArrowLeft':
          if (direction !== DIRECTIONS.RIGHT) {
            setNextDirection(DIRECTIONS.LEFT);
          }
          break;
        case 'ArrowRight':
          if (direction !== DIRECTIONS.LEFT) {
            setNextDirection(DIRECTIONS.RIGHT);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, direction]);

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        // Update direction
        setDirection(nextDirection);
        
        // Create new head
        const head = prevSnake[0];
        const newHead = {
          x: (head.x + nextDirection.x + GRID_SIZE) % GRID_SIZE,
          y: (head.y + nextDirection.y + GRID_SIZE) % GRID_SIZE,
        };
        
        // Check collision with self
        const selfCollision = prevSnake.some(segment => 
          segment.x === newHead.x && segment.y === newHead.y
        );
        
        if (selfCollision) {
          endGame();
          return prevSnake;
        }
        
        // Create new snake
        const newSnake = [newHead, ...prevSnake];
        
        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(prev => prev + 1);
          setFood(generateFood());
        } else {
          // Remove tail if no food eaten
          newSnake.pop();
        }
        
        return newSnake;
      });
    };

    gameLoopRef.current = setInterval(moveSnake, INITIAL_SPEED);
    
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameState, food, nextDirection, generateFood]);

  // Handle direction button clicks
  const handleDirectionClick = (newDirection: typeof DIRECTIONS.UP) => {
    if (gameState !== 'playing') return;
    
    // Prevent 180-degree turns
    if (
      (newDirection === DIRECTIONS.UP && direction !== DIRECTIONS.DOWN) ||
      (newDirection === DIRECTIONS.DOWN && direction !== DIRECTIONS.UP) ||
      (newDirection === DIRECTIONS.LEFT && direction !== DIRECTIONS.RIGHT) ||
      (newDirection === DIRECTIONS.RIGHT && direction !== DIRECTIONS.LEFT)
    ) {
      setNextDirection(newDirection);
    }
  };

  return (
    <section className="snake-game-section container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary text-center">
          Take a <span className="text-theme-primary">Break</span>
        </h2>
        
        <div className="snake-game-container bg-base-secondary rounded-lg p-6 shadow-lg max-w-md mx-auto">
          <div className="snake-game-header flex justify-between items-center mb-4">
            <div className="score-display flex items-center gap-2">
              <div className="food-icon w-4 h-4 bg-theme-primary rounded-full"></div>
              <span className="text-text-primary font-medium">{score}</span>
            </div>
            <div className="game-status text-text-secondary">
              {gameState === 'start' && 'Ready to play?'}
              {gameState === 'playing' && 'Playing...'}
              {gameState === 'gameover' && 'Game Over!'}
            </div>
          </div>
          
          <div 
            className="snake-game-board relative bg-ui-secondary rounded-md overflow-hidden"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
              margin: '0 auto',
            }}
          >
            {/* Game overlay for start and game over states */}
            {gameState !== 'playing' && (
              <div className="absolute inset-0 bg-base-primary bg-opacity-80 flex flex-col items-center justify-center z-10">
                {gameState === 'start' ? (
                  <>
                    <h3 className="text-xl font-bold text-text-primary mb-4">Snake Game</h3>
                    <p className="text-text-secondary mb-6 text-center px-4">Use arrow keys or buttons to control the snake</p>
                    <button 
                      onClick={startGame}
                      className="btn-primary px-6 py-2 rounded-md font-medium text-white bg-theme-primary hover:bg-theme-primary-dark transition-colors"
                    >
                      Start Game
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Game Over!</h3>
                    <p className="text-text-secondary mb-2">Your score: {score}</p>
                    <button 
                      onClick={startGame}
                      className="btn-primary px-6 py-2 rounded-md font-medium text-white bg-theme-primary hover:bg-theme-primary-dark transition-colors"
                    >
                      Play Again
                    </button>
                  </>
                )}
              </div>
            )}
            
            {/* Snake */}
            {snake.map((segment, index) => (
              <div 
                key={index}
                className="absolute bg-theme-primary rounded-sm"
                style={{
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  left: segment.x * CELL_SIZE + 1,
                  top: segment.y * CELL_SIZE + 1,
                  opacity: index === 0 ? 1 : 0.8 - (index * 0.05),
                }}
              />
            ))}
            
            {/* Food */}
            <div 
              className="absolute bg-theme-primary rounded-full"
              style={{
                width: CELL_SIZE - 6,
                height: CELL_SIZE - 6,
                left: food.x * CELL_SIZE + 3,
                top: food.y * CELL_SIZE + 3,
              }}
            />
          </div>
          
          {/* Game controls */}
          <div className="game-controls mt-6">
            <div className="flex justify-center mb-4">
              <button 
                onClick={() => handleDirectionClick(DIRECTIONS.UP)}
                className="direction-btn w-12 h-12 flex items-center justify-center bg-ui-tertiary hover:bg-ui-hover rounded-md"
                aria-label="Move Up"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5L19 12H5L12 5Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => handleDirectionClick(DIRECTIONS.LEFT)}
                className="direction-btn w-12 h-12 flex items-center justify-center bg-ui-tertiary hover:bg-ui-hover rounded-md"
                aria-label="Move Left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L12 5V19L5 12Z" fill="currentColor" />
                </svg>
              </button>
              <button 
                onClick={() => handleDirectionClick(DIRECTIONS.DOWN)}
                className="direction-btn w-12 h-12 flex items-center justify-center bg-ui-tertiary hover:bg-ui-hover rounded-md"
                aria-label="Move Down"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19L5 12H19L12 19Z" fill="currentColor" />
                </svg>
              </button>
              <button 
                onClick={() => handleDirectionClick(DIRECTIONS.RIGHT)}
                className="direction-btn w-12 h-12 flex items-center justify-center bg-ui-tertiary hover:bg-ui-hover rounded-md"
                aria-label="Move Right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12L12 19V5L19 12Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnakeGame;