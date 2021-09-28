function bfs(rootNode, vertices, edges){
    let queue = []
    let visited = []
    rootNode.distance = 0
    queue.push(rootNode)

    while(queue.length > 0) {
        let workingNode = queue.shift()
        visited.push(workingNode)
        let adjacentNodes = findAdjacent(workingNode.name, vertices, edges)
        markDistanceAndPredecessor(workingNode, adjacentNodes)
    
        for(const node of adjacentNodes) {
            queue.push(node)
        }
    }

    return visited
}

function findAdjacent(node, vertices, edges) {
    let adjacentNodes = []

    for(const edge of edges) {
        if(edge[0] == node) {
            let newNode = vertices.find(node => node.name == edge[1])
            if(newNode.distance == null) {
                adjacentNodes.push(newNode)
            }
        } else if (edge[1] == node) {
            let newNode = vertices.find(node => node.name == edge[0])
            if(newNode.distance == null) {
                adjacentNodes.push(newNode)
            }
        }
    }
    return adjacentNodes
}

function markDistanceAndPredecessor(node, adjacentNodes) {
    for(const adjNode of adjacentNodes) {
        adjNode.predecessor = node
        adjNode.distance = node.distance + 1
    }

    return adjacentNodes
}