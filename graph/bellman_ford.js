function solution(graph, source) {
  const numVertices = graph.length;

  const distance = Array(numVertices).fill(Infinity);
  distance[source] = 0;

  const predecessor = Array(numVertices).fill(null);

  for (let temp = 0; temp < numVertices - 1; temp++) {
    for (let u = 0; u < numVertices; u++) {
      for (const [v, weight] of graph[u]) {
        if (distance[u] + weight < distance[v]) {
          distance[v] = distance[u] + weight;
          predecessor[v] = u;
        }
      }
    }
  }

  for (let u = 0; u < numVertices; u++) {
    for (const [v, weight] of graph[u]) {
      if (distance[u] + weight < distance[v]) {
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}

console.log(
  solution(
    [
      [
        [1, 4],
        [2, 3],
        [4, -6],
      ],
      [[3, 5]],
      [[1, 2]],
      [
        [0, 7],
        [2, 4],
      ],
      [[2, 2]],
    ],
    0
  )
); // [[0, -2, -4, 3, -6], [null, 2, 4, 1, 0]]
console.log(
  solution(
    [
      [
        [1, 5],
        [2, -1],
      ],
      [[2, 2]],
      [[3, -2]],
      [
        [0, 2],
        [1, 6],
      ],
    ],
    0
  )
); // [-1]
