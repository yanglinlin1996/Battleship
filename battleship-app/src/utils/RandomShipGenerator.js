export const GenerateRandomGameBoard = () => {
  const emptyBoard = new Array(10).fill("").map(() => new Array(10).fill(""));
  console.log("Generate an empty board: " + emptyBoard);
  const shipLocationSet = generateShipLocations();
  for (let pos of shipLocationSet) {
    const idxs = pos.split(",");
    const x = parseInt(idxs[0]);
    const y = parseInt(idxs[1]);
    emptyBoard[x][y] = "*";
  }
  return [...emptyBoard];
};

function generateShipLocations() {
  const shipsSize = [5, 4, 3, 3, 2];
  const shipLocationSet = new Set();
  for (let size of shipsSize) {
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
      console.log("existed?: ", shipLocationSet.has(pos));
      shipLocationSet.add(pos);
    }
    console.log("shipsize: " + size);
    console.log("ship locations: ", shipLocations);
  }
  console.log("Generated Random ship locations: " + shipLocationSet);
  return new Set(shipLocationSet);
}

function randomLocation(shipSize) {
  // 0: horizontal; 1: vertical
  const direction = Math.floor(Math.random() * 2); // 0 or 1
  // start index of x or y regards of direction
  const index1 = Math.floor(Math.random() * (10 - shipSize));
  const index2 = Math.floor(Math.random() * 10);
  console.log(
    "direction: " + direction + " index1: " + index1 + " index2: " + index2
  );
  const currShiplocations = [];
  for (let i = 0; i < shipSize; i++) {
    let curPos;
    if (direction === 0) {
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
  return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}
