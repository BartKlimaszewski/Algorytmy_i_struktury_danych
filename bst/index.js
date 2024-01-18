// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  
    insert(data) {
      // Wstawianie nowego węzła w odpowiednie miejsce w drzewie
      if (data < this.data) {
        // Wstawianie w lewej gałęzi
        if (this.left) {
          this.left.insert(data);
        } else {
          this.left = new Node(data);
        }
      } else {
        // Wstawianie w prawej gałęzi
        if (this.right) {
          this.right.insert(data);
        } else {
          this.right = new Node(data);
        }
      }
    }
  
    contains(data) {
      // Sprawdzanie, czy drzewo zawiera węzeł o danym kluczu
      if (data === this.data) {
        return this;
      }
  
      // Szukanie w lewej gałęzi, jeśli wartość jest mniejsza
      if (data < this.data && this.left) {
        return this.left.contains(data);
      }
  
      // Szukanie w prawej gałęzi, jeśli wartość jest większa
      if (data > this.data && this.right) {
        return this.right.contains(data);
      }
  
      // Zwracanie null, jeśli węzeł o danej wartości nie został znaleziony
      return null;
    }
  }

module.exports = Node;
