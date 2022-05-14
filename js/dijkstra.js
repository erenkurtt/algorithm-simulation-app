
nodesObjects = [];

let dijkstra = {
    'A': {'B': 2, 'C': 4},
    'B': {'A': 2, 'C': 3, 'D': 8},
    'C': {'A': 4, 'B': 3, 'E': 5, 'D': 2},
    'D': {'B': 8, 'C': 2, 'E': 11, 'F':22},
    'E': {'C': 5, 'D': 11, 'F': 1},
    'F': {'D': 22, 'E': 1}
}

nodesCoordinates = [
    ['A', 100, 250],
    ['B', 300, 100],
    ['C', 300, 400],
    ['D', 500, 100],
    ['E', 500, 400],
    ['F', 700, 250],
];

nodeLines = [];

function startDijkstraGraph() {

    canvasArea.stop();

    canvasArea.start(updateCanvasDijkstraGraph);

    for (let j = 0; j < nodesCoordinates.length; j++) {
        let newObj = new componenttext(nodesCoordinates[j][0], nodesCoordinates[j][1], nodesCoordinates[j][2]);
        nodesObjects.push(newObj);
    }

    // for (let i = 0; j < kruskalArray.length; i++) {
    //     // let obj = nodesCoordinates.filter(item => item[0])
    // }
    
    let line = [];

    // kruskalArray.forEach(element => {
    //     line = nodesCoordinates.filter(e => element[0] === e[0] || element[1] === e[0] )
    //     edge = new componentLine( line[0][1], line[0][2], line[1][1], line[1][2] );
    //     nodeLines.push(edge);
    // })
    
    Object.keys(dijkstra).forEach( element => {
        console.log(dijkstra[element])
        Object.keys(dijkstra[element]).forEach ( e => {
            console.log(e)
            line = nodesCoordinates.filter(x => x[0] === e || x[0] === element)
            edge = new componentLine( line[0][1], line[0][2], line[1][1], line[1][2], dijkstra[element][e] );
            nodeLines.push(edge);
        })
    })

    //deneme  =  new componenttext(  i , 10 * 5 * i, 350);
}

function updateCanvasDijkstraGraph() {

    canvasArea.clear();
    nodesObjects.forEach((element) => {
        element.update();
    })
    nodeLines.forEach((element) => {
        element.update();
    })
}

