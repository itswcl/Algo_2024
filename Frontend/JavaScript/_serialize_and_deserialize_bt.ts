// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
  // your code here
  if (!root) return "_";
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  // your code here
  let q = str.split(",");

  function dfs(q) {
    if (!q.length) return null;

    const item = q.shift();
    if (item != "_") {
      const newNode = new Node(node.val);
      newNode.left = dfs(q);
      newNode.right = dfs(q);
      return newNode;
    }
    return null;
  }

  return dfs(q);
}
