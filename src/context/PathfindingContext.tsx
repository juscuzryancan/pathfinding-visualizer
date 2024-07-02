import { useState, createContext } from "react";
import { AlgorithmType, MazeType, GridType } from "../utils/types.ts"
import { createGrid } from "../utils/helpers.ts";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants.ts";

interface PathfindingContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualiezed: boolean) => void;
}
export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));
  const [isGraphVisualized, setIsGraphVisualized]

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >{children}</PathfindingContext.Provider>
  )
}


