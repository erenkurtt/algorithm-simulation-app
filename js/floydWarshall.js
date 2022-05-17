nodesObjects = [];
nodeLines = [];

let floydWarshallArray = [
  ["A", "B", 5],
  ["A", "E", 16],
  ["A", "F", 8],
  ["B", "C", 1],
  ["B", "F", 2],
  ["C", "D", 1],
  ["C", "F", 6],
  ["D", "E", 4],
  ["D", "F", 5],
  ["E", "F", 4],
];

let nodesCoordinates = [
  ["A", 50, 25],
  ["B", 150, 25],
  ["C", 250, 50],
  ["D", 200, 150],
  ["E", 75, 175],
  ["F", 150, 100],
];

let arr0 = [
  [0, 5, 99, 99, 16, 8],
  [5, 0, 1, 99, 99, 2],
  [99, 1, 0, 1, 99, 6],
  [99, 99, 1, 0, 4, 5],
  [16, 99, 99, 4, 0, 4],
  [8, 2, 6, 5, 4, 0],
];

let matrixObjects = new Array(arr0.length);

for (let i = 0; i < matrixObjects.length; i++)
  matrixObjects[i] = new Array(matrixObjects.length);

function startFloydWarshallGraph() {
  canvasArea.stop();

  canvasArea.start(updateCanvasFloydWarshallGraph);

  for (let j = 0; j < nodesCoordinates.length; j++) {
    let newObj = new componenttext(
      nodesCoordinates[j][0],
      nodesCoordinates[j][1],
      nodesCoordinates[j][2]
    );
    nodesObjects.push(newObj);
  }

  let line = [];

  floydWarshallArray.forEach((element) => {
    line = nodesCoordinates.filter(
      (e) => element[0] === e[0] || element[1] === e[0]
    );
    edge = new componentLine(
      line[0][0],
      line[1][0],
      line[0][1],
      line[0][2],
      line[1][1],
      line[1][2],
      element[2],
      "black"
    );
    nodeLines.push(edge);
  });
  for (let i = 0; i < arr0.length; i++) {
    for (let j = 0; j < arr0.length; j++) {
      let newObj = new componenttext(arr0[i][j], 300 + i * 25, 25 + j * 25);
      newObj.fontSize = 16;
      matrixObjects[i][j] = newObj;
    }
  }
  // console.log(matrixObjects);
}
const usedNodes = [];
const usedEdges = [];
let colors = Array(floydWarshallArray.length).fill("black");

let matrixCounter = 0;

let arr1 = new Array(arr0.length);

for (let i = 0; i < arr1.length; i++) arr1[i] = new Array(arr1.length);

function updateCanvasFloydWarshallGraph() {
  //canvasArea.clear();
  nodesObjects.forEach((element) => {
    element.fontSize = 18;
    element.update("black");
  });
  nodeLines.forEach((element) => {
    element.update();
  });

  if (matrixCounter > 0) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        arr1[i][j] = matrixObjects[i][j];
      }
    }

    for (let i = 0; i < arr0.length; i++) {
      for (let j = 0; j < arr0.length; j++) {
        if (i === j || i === matrixCounter-1 || j === matrixCounter-1) {
          matrixObjects[i][j].text = arr1[i][j].text;
        } else {
          if (arr1[i][j].text < arr1[i][matrixCounter-1].text + arr1[matrixCounter-1][j].text)
          matrixObjects[i][j].text = arr1[i][j].text;
          else matrixObjects[i][j].text = arr1[i][matrixCounter-1].text + arr1[matrixCounter-1][j].text;
        }
        console.log(i,j,matrixCounter-1,arr1[i][matrixCounter-1].text + arr1[matrixCounter-1][j].text)

        if(matrixCounter<3)
          matrixObjects[i][j].x = 300 + 250 * matrixCounter + i * 25;
        else
          matrixObjects[i][j].x = 50 + 250 * (matrixCounter-3) + i * 25;
        if(matrixCounter==3)
          matrixObjects[i][j].y = 200 + (25 * matrixCounter) + j * 25 ;
      }
    }
  }

  for(let i=0; i<matrixObjects.length; i++){
    for(let j=0; j<matrixObjects.length; j++){
      if(i === j || i === matrixCounter-1 || j === matrixCounter-1)
        matrixObjects[i][j].update("red")
      else
        matrixObjects[i][j].update("black")
    }
  }

  // matrixObjects.forEach((element) => {
  //   element.forEach((e) => {
  //     e.update();
  //   });
  // });

  matrixCounter++;

  if (matrixCounter == 7) {
    canvasArea.stop();
  }
}
