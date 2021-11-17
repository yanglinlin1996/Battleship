import "./Constants.js";
import {
  BOARD_LENGTH,
  ROW,
  COLUMN,
  SHIP_SYMBOL,
  SHIPS_SIZE,
  BOARD_DIRECTIONS,
} from "./Constants.js";

export const GenerateRandomGameBoard = () => {
  const emptyBoard = new Array(BOARD_LENGTH)
    .fill("")
    .map(() => new Array(BOARD_LENGTH).fill(""));
  console.log("Generate an empty board: " + emptyBoard);
  const shipLocationSet = generateShipLocations();
  for (let pos of shipLocationSet) {
    const idxs = pos.split(",");
    const x = parseInt(idxs[ROW]);
    const y = parseInt(idxs[COLUMN]);
    emptyBoard[x][y] = SHIP_SYMBOL;
  }
  return [...emptyBoard];
};

function generateShipLocations() {
  const shipLocationSet = new Set();
  for (let size of SHIPS_SIZE) {
    let shipLocations = randomLocation(size);
    let shipLocationsOccupied = checkOccupied(shipLocationSet, shipLocations);
    while (shipLocationsOccupied) {
      // true
      shipLocations = randomLocation(size);
      shipLocationsOccupied = checkOccupied(shipLocationSet, [
        ...shipLocations,
      ]);
    }
    for (let pos of shipLocations) {
      shipLocationSet.add(pos);
    }
  }
  return new Set(shipLocationSet);
}

function randomLocation(shipSize) {
  // 0: horizontal; 1: vertical
  const direction = Math.floor(Math.random() * BOARD_DIRECTIONS); // 0 or 1
  // start index of x or y regards of direction
  const index1 = Math.floor(Math.random() * (BOARD_LENGTH - shipSize));
  const index2 = Math.floor(Math.random() * BOARD_LENGTH);
  const currShiplocations = [];
  for (let i = 0; i < shipSize; i++) {
    let curPos;
    if (direction === ROW) {
      curPos = index2 + "," + (index1 + i);
    } else {
      curPos = index1 + i + "," + index2;
    }
    currShiplocations.push(curPos);
  }
  return [...currShiplocations];
}

function checkOccupied(shipLocationSet, shipLocations) {
  for (let pos of shipLocations) {
    if (shipLocationSet.has(pos)) {
      return true;
    }
  }
  return false;
}

export function generateAIAttackPos() {
  return [
    Math.floor(Math.random() * BOARD_LENGTH),
    Math.floor(Math.random() * BOARD_LENGTH),
  ];
}
