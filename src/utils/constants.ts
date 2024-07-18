export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  isStart: false,
  isTraversed: false,
  distance: 0,
  parent: null
}

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  isStart: false,
  isTraversed: false,
  distance: 0,
  parent: null
}
