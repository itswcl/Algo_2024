/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  let trie = new Trie();
  for (let root of dictionary) trie.insert(root);
  let words = sentence.split(" ");
  let result = [];
  for (let word of words) {
    let root = trie.searchPrefix(word);
    if (root) {
      result.push(root);
    } else {
      result.push(word);
    }
  }
  return result.join(" ");
};

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  searchPrefix(word) {
    let node = this.root;
    let prefix = "";
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      prefix += char;
      node = node.children[char];
      if (node.isEnd) {
        return prefix;
      }
    }
    return false;
  }
}
