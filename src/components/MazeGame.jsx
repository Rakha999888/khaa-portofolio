import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const CELL_SIZE = 30;
const MAZE_WIDTH = 15;
const MAZE_HEIGHT = 15;
const PLAYER_SIZE = CELL_SIZE * 0.6;


const generateMaze = () => {

  const maze = Array(MAZE_HEIGHT).fill().map(() => Array(MAZE_WIDTH).fill(1));
  

  const carvePath = (x, y) => {
    const directions = [[0, 2], [2, 0], [0, -2], [-2, 0]]
      .sort(() => Math.random() - 0.5);
    
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      
      if (nx > 0 && nx < MAZE_WIDTH - 1 && 
          ny > 0 && ny < MAZE_HEIGHT - 1 && 
          maze[ny][nx] === 1) {
        maze[y + dy/2][x + dx/2] = 0;
        maze[ny][nx] = 0;
        carvePath(nx, ny);
      }
    }
  };

  maze[1][1] = 0;
  carvePath(1, 1);
  

  maze[1][0] = 'S'; // Start
  maze[MAZE_HEIGHT-2][MAZE_WIDTH-1] = 'E'; // End
  
  return maze;
};

const MazeGame = ({ onComplete }) => {
  const [maze, setMaze] = useState([]);
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 1 });
  const [gameComplete, setGameComplete] = useState(false);


  useEffect(() => {
    setMaze(generateMaze());
  }, []);

  // Handle keyboard controls
  const handleKeyDown = useCallback((e) => {
    if (gameComplete) return;
    
    const { x, y } = playerPos;
    let newX = x;
    let newY = y;

    switch(e.key) {
      case 'ArrowUp':
        newY = Math.max(0, y - 1);
        break;
      case 'ArrowDown':
        newY = Math.min(MAZE_HEIGHT - 1, y + 1);
        break;
      case 'ArrowLeft':
        newX = Math.max(0, x - 1);
        break;
      case 'ArrowRight':
        newX = Math.min(MAZE_WIDTH - 1, x + 1);
        break;
      default:
        return;
    }

    // Check if move is valid
    if (maze[newY] && maze[newY][newX] !== 1) {
      setPlayerPos({ x: newX, y: newY });
      
      // Check if reached the end
      if (maze[newY][newX] === 'E') {
        setGameComplete(true);
        setTimeout(() => onComplete(), 1500);
      }
    }
  }, [playerPos, maze, gameComplete, onComplete]);

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (maze.length === 0) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Maze Challenge</h2>
        <p className="text-gray-400">Use arrow keys to navigate to the exit (E)</p>
      </div>
      
      <div 
        className="relative border-4 border-neon-blue"
        style={{
          width: MAZE_WIDTH * CELL_SIZE,
          height: MAZE_HEIGHT * CELL_SIZE,
        }}
      >
        {/* Maze walls and paths */}
        {maze.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`absolute ${cell === 1 ? 'bg-neon-blue' : 'bg-gray-900'}`}
              style={{
                left: x * CELL_SIZE,
                top: y * CELL_SIZE,
                width: CELL_SIZE,
                height: CELL_SIZE,
              }}
            >
              {cell === 'S' && (
                <div className="w-full h-full flex items-center justify-center text-neon-green font-bold">S</div>
              )}
              {cell === 'E' && (
                <div className="w-full h-full flex items-center justify-center text-neon-pink font-bold">E</div>
              )}
            </div>
          ))
        )}
        
        {/* Player */}
        <motion.div
          className="absolute bg-neon-green rounded-full"
          style={{
            left: playerPos.x * CELL_SIZE + (CELL_SIZE - PLAYER_SIZE) / 2,
            top: playerPos.y * CELL_SIZE + (CELL_SIZE - PLAYER_SIZE) / 2,
            width: PLAYER_SIZE,
            height: PLAYER_SIZE,
            zIndex: 10,
          }}
          animate={gameComplete ? {
            scale: [1, 1.5, 1],
            opacity: [1, 0],
            transition: { duration: 1.5 }
          } : {}}
        />
      </div>
      
      {gameComplete && (
        <motion.div 
          className="mt-8 text-2xl font-bold text-neon-green"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Well done! Entering portfolio...
        </motion.div>
      )}
    </motion.div>
  );
};

export default MazeGame;
