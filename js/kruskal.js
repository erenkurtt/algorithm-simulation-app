
let nodesObjects = [];

let kruskalArray = [
    ['X', 'V', 1],
    ['W', 'V', 1],
    ['W', 'U', 1],
    ['X', 'W', 2],
    ['U', 'S', 2],
    ['T', 'U', 3],
    ['X', 'Y', 3],
    ['U', 'V', 3],
    ['S', 'T', 4],
    ['Y', 'V', 4],
    ['Y', 'T', 5],
    ['Y', 'Z', 5],
    ['Z', 'T', 10],
  ];

let nodesCoordinates = [
    ['X', 100, 350],
    ['V', 300, 250],
    ['W', 300, 450],
    ['U', 500, 450],
    ['S', 700, 250],
    ['T', 500, 150],
    ['Y', 100, 150],
    ['Z', 300, 50],
];

let nodeLines = [];

function startKruskalGraph() {

    canvasArea.stop();

    canvasArea.start(updateCanvasKruskalGraph);

    for (let j = 0; j < nodesCoordinates.length; j++) {
        if(nodesCoordinates[j][0] === 'Y' || nodesCoordinates[j][0] === 'X' || nodesCoordinates[j][0] === 'W' || nodesCoordinates[j][0] === 'U'){
            let newObj = new componenttext(nodesCoordinates[j][0], nodesCoordinates[j][1]-30, nodesCoordinates[j][2]+30);
            nodesObjects.push(newObj);
        }
        else {
            let newObj = new componenttext(nodesCoordinates[j][0], nodesCoordinates[j][1], nodesCoordinates[j][2]);
            nodesObjects.push(newObj);
        }
    }

    // for (let i = 0; j < kruskalArray.length; i++) {
    //     // let obj = nodesCoordinates.filter(item => item[0])
    // }

    let line = [];

    kruskalArray.forEach(element => {
        line = nodesCoordinates.filter(e => element[0] === e[0] || element[1] === e[0] )
        edge = new componentLine( line[0][1], line[0][2], line[1][1], line[1][2], element[2], 'black');
        nodeLines.push(edge);
    });

    //deneme  =  new componenttext(  i , 10 * 5 * i, 350);
}
const usedNodes = [];
const usedEdges = [];
let i = 0;
let colors = Array(kruskalArray.length).fill('black');

function updateCanvasKruskalGraph() {

    canvasArea.clear();
    nodesObjects.forEach((element) => {
        element.update();
    });

    if (i < kruskalArray.length) {
        
        if(usedNodes.includes(kruskalArray[i][0]) === false || usedNodes.includes(kruskalArray[i][1]) === false){
            for(let k=0; k<kruskalArray.length; k++){
                if(k==i)
                    nodeLines[k].update("blue");
                else
                nodeLines[k].update("black");
                
            }

            if(usedNodes.includes(kruskalArray[i][0]) === false){
              usedNodes.push(kruskalArray[i][0]);
              //colors[i] = 'blue';
              nodeLines[i].color = 'blue';
            }
            if(usedNodes.includes(kruskalArray[i][1]) === false){
              usedNodes.push(kruskalArray[i][1]);
              //colors[i] = 'blue';
              nodeLines[i].color = 'blue';
            }
        }
        else {
            //colors[i] = 'red';
            nodeLines[i].color = 'red';
        }

    }
    nodeLines.forEach((element) => {
        element.update();
    });

    if( i < kruskalArray.length){
        i++;
    }
    else {
        nodeLines.forEach((element) => {
            if(element.color === 'red'){
                element.color = 'white';
                element.numberColor = 'white';
            }
            element.update();
        });
        canvasArea.stop();
    }

}



