/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const trie = new Trie();
  let result = [];
  let prefix = "";

  for (let product of products) trie.insert(product);
  for (let char of searchWord) {
    prefix += char;
    const searchResult = trie.search(prefix);
    result.push(searchResult);
  }

  return result;
};

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.words = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      const noChar = !node.children[char];
      if (noChar) node.children[char] = new TrieNode();
      node = node.children[char];

      if (node.words.length < 3) {
        node.words.push(word);
        node.words.sort();
      } else if (word < node.words[2]) {
        node.words.push(word);
        node.words.sort();
        node.words.pop();
      }
    }
  }

  search(prefix) {
    let node = this.root;
    for (let char of prefix) {
      const noChar = !node.children[char];
      if (noChar) return [];
      node = node.children[char];
    }
    return node.words;
  }
}
