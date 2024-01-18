// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // Jeśli dochodzę do liścia (węzeł pusty), to jestem w poprawnym BST
    if (!node) {
      return true;
    }
  
    // Sprawdzam, czy wartość węzła mieści się w zakresie (min, max)
    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
      return false;
    }
  
    // Sprawdzam lewe i prawe poddrzewo z aktualizacją zakresu
    return (
      validate(node.left, min, node.data) &&
      validate(node.right, node.data, max)
    );
  }
  
  module.exports = validate;
