/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // // big O time O(n) space O(n)
  // // worst need to visit every child
  // // recursive call which depends the high of callstack so O(n)
  // if (rootA === target) return rootB;
  // for (let i = 0; i < rootA.children.length; i++) {
  //   const res = findCorrespondingNode(rootA.children[i], rootB.children[i], target)
  //   if (res) return res;
  // }

  // // big O O(n) space O(h)
  // // visit each node once -> N
  // // stack heigh -> H
  // const stack = [[rootA, rootB]];
  // while (stack.length) {
  //   const [nodeA, nodeB] = stack.pop();
  //   if (nodeA === target) return nodeB;

  //   for (let i = 0; i < nodeA.children.length; i++) {
  //     stack.push([nodeA.children[i], nodeB.children[i]])
  //   }
  // }

  // big O O(n) space O(w)
  // visit each node
  // width of node
  const qA = [rootA];
  const qB = [rootB];
  while (qA.length) {
    const nodeA = qA.shift();
    const nodeB = qB.shift();
    if (nodeA === target) return nodeB;

    qA.push(...nodeA.children);
    qB.push(...nodeB.children);
  }
};
