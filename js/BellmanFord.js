nodesObjects = [];
nodesWeight = [];



let bellmanFord = {
  A: { B: -2, C: 4 },
  B: { C: 3, D: 8 },
  C: { E: 5, D: 2 },
  D: { E: 11, F: 22 },
  E: { F: 1 },
  F: {},
};

keyCounter = -1;
valueCounter = 0;
keys = Object.keys(bellmanFord);
lineCounter = 0;

nodesCoordinates = [
  ["A", 100, 250],
  ["B", 300, 100],
  ["C", 300, 400],
  ["D", 500, 100],
  ["E", 500, 400],
  ["F", 700, 250],
];

nodeWeight = [
  ["A", 0],
  ["B", -1],
  ["C", -1],
  ["D", -1],
  ["E", -1],
  ["F", -1],
];

nodeLines = [];

function startBellmanFordGraph() {
  canvasArea.stop();
  nodesObjects = [];
  nodesWeight = [];
  keyCounter = -1;
  valueCounter = 0;
  keys = Object.keys(bellmanFord);
  lineCounter = 0;
  nodeLines = [];
  nodeWeight = [
    ["A", 0],
    ["B", -1],
    ["C", -1],
    ["D", -1],
    ["E", -1],
    ["F", -1],
  ];
  nodesCoordinates = [
    ["A", 100, 250],
    ["B", 300, 100],
    ["C", 300, 400],
    ["D", 500, 100],
    ["E", 500, 400],
    ["F", 700, 250],
  ];
  
  canvasArea.start(updateCanvasBellmanFordGraph);

  for (let j = 0; j < nodesCoordinates.length; j++) {
    if (
      nodesCoordinates[j][0] === "A" ||
      nodesCoordinates[j][0] === "C" ||
      nodesCoordinates[j][0] === "E"
    ) {
      let newObj = new componenttext(
        nodesCoordinates[j][0],
        nodesCoordinates[j][1] - 15,
        nodesCoordinates[j][2] + 20
      );
      nodesObjects.push(newObj);
    } else {
      let newObj = new componenttext(
        nodesCoordinates[j][0],
        nodesCoordinates[j][1],
        nodesCoordinates[j][2]
      );
      nodesObjects.push(newObj);
    }
  }

  for (let i = 0; i < nodeWeight.length; i++) {
    if (
      nodeWeight[i][0] === "A" ||
      nodeWeight[i][0] === "C" ||
      nodeWeight[i][0] === "E"
    ) {
      let weight = new componenttext(
        nodeWeight[i][1] !== -1 ? nodeWeight[i][1] : "",
        nodesCoordinates[i][1] - 35,
        nodesCoordinates[i][2] + 35
      );
      nodesWeight.push(weight);
    } else {
      let weight = new componenttext(
        nodeWeight[i][1] !== -1 ? nodeWeight[i][1] : "",
        nodesCoordinates[i][1] + 15,
        nodesCoordinates[i][2] - 20
      );
      nodesWeight.push(weight);
    }
  }

  line = [];

  Object.keys(bellmanFord).forEach((element) => {
    Object.keys(bellmanFord[element]).forEach((e) => {
      line = nodesCoordinates.filter((x) => x[0] === e || x[0] === element);
      edge = new componentLine(
        line[0][0],
        line[1][0],
        line[0][1],
        line[0][2],
        line[1][1],
        line[1][2],
        bellmanFord[element][e],
        "black"
      );
      nodeLines.push(edge);
    });
  });

  //deneme  =  new componenttext(  i , 10 * 5 * i, 350);
}



function updateCanvasBellmanFordGraph() {
  if (keyCounter < keys.length - 1 && keyCounter !== -1) {
    canvasArea.clear();
    let currentPointWeight = nodeWeight.findIndex(
      (e) => keys[keyCounter] === e[0]
    );

    valueKeys = Object.keys(bellmanFord[keys[keyCounter]]);

    if (valueCounter < valueKeys.length) {
    }

    let nextPointWeight = nodeWeight.findIndex(
      (x) => valueKeys[valueCounter] === x[0]
    );
    if (
      nodeWeight[nextPointWeight][1] !== -1 &&
      nodeWeight[nextPointWeight][1] !== 0
    ) {
      if (
        nodeWeight[nextPointWeight][1] >
        nodeWeight[currentPointWeight][1] +
        bellmanFord[keys[keyCounter]][valueKeys[valueCounter]]
      ) {
        nodeWeight[nextPointWeight][1] =
          nodeWeight[currentPointWeight][1] +
          bellmanFord[keys[keyCounter]][valueKeys[valueCounter]];
        nodeLines[lineCounter].color = "blue";
        for(let i=0; i<lineCounter; i++){
          if(nodeLines[i].node2 == nodeLines[lineCounter].node2)
            nodeLines[i].color = "red"
          console.log(nodeLines[i].node2)
        }
      }
    } else {
      if (nodeWeight[nextPointWeight][1] === -1) {
        nodeWeight[nextPointWeight][1] =
          nodeWeight[currentPointWeight][1] +
          bellmanFord[keys[keyCounter]][valueKeys[valueCounter]];
        nodeLines[lineCounter].color = "blue";
      }
    }

    nodesWeight = [];

    for (let i = 0; i < nodeWeight.length; i++) {
      if (
        nodeWeight[i][0] === "A" ||
        nodeWeight[i][0] === "C" ||
        nodeWeight[i][0] === "E"
      ) {
        let weight = new componenttext(
          nodeWeight[i][1] !== -1 ? nodeWeight[i][1] : "",
          nodesCoordinates[i][1] - 35,
          nodesCoordinates[i][2] + 35
        );
        nodesWeight.push(weight);
      } else {
        let weight = new componenttext(
          nodeWeight[i][1] !== -1 ? nodeWeight[i][1] : "",
          nodesCoordinates[i][1] + 15,
          nodesCoordinates[i][2] - 20
        );
        nodesWeight.push(weight);
      }
    }

    nodesObjects.forEach((element) => {
      element.update();
    });

    nodesWeight.forEach((element) => {
      element.update("green");
    });

    nodeLines.forEach((element) => {
      if (nodeLines[lineCounter].color === "black")
        nodeLines[lineCounter].color = "red";
      element.update();
    });
    // let temp = 0;
    // for (let i = 0; i < nodeLines.length; i++) {
    //   if (lineCounter === i) {
    //       temp = i;
    //     nodeLines[i].color = "blue";
    //     nodeLines[i].update();
    //   } else nodeLines[i].update();

    //   nodeLines[temp].color = 'black';
    // }

    valueCounter++;
    if (valueCounter === valueKeys.length) {
      valueCounter = 0;
      keyCounter++;
    }
    lineCounter++;
  } else {
    if (keyCounter === -1) {
      canvasArea.clear();
      nodesObjects.forEach((element) => {
        element.update();
      });

      nodesWeight.forEach((element) => {
        element.update("green");
      });

      nodeLines.forEach((element) => {
        element.update();
      });
      keyCounter++;
    } else {
      //canvasArea.clear();
      nodesObjects.forEach((element) => {
        element.update();
      });

      nodesWeight.forEach((element) => {
        element.update("green");
      });

      nodeLines.forEach((element) => {
        if (element.color === "red") {
          element.color = "white";
          element.numberColor = "white";
        }
        element.update();
        canvasArea.stop();
      });
    }
  }
}
