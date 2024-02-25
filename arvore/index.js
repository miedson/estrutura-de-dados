class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        this.root = this._insert(this.root, key);
    }

    _insert(root, key) {
        if(root === null) {
            return new Node(key);
        }
        if(key < root.key) {
            root.left = this._insert(root.left, key);
        }
        if(key > root.key) {
            root.right = this._insert(root.right, key);
        }
        return root;
    }
    inorderTraversal(root) {
        if(root) {
            this.inorderTraversal(root.left);
            console.log(root.key);
            this.inorderTraversal(root.right);
        }
    }
    invertOrderTree(root) {
        if(root) {
            const left = root.right;
            const right = root.left;
            root.left = left;
            root.right = right;
            this.invertOrderTree(root.left);
            this.invertOrderTree(root.right);
        }
    }
    printTree(root) {
        if(root) {
            console.log(root);
            this.printTree(root.left);
            this.printTree(root.right);
        }
    }
}

const tree = new BinaryTree();
const keys = [15, 7, 22, 3, 12, 18, 25];
keys.forEach(key => tree.insert(key));
console.log("Árvore Binária contruida");
tree.printTree(tree.root);

console.log("Árvore Binária de Busca (inorder):");
tree.inorderTraversal(tree.root);

console.log("Árvore Binária invertida");
tree.invertOrderTree(tree.root);
tree.printTree(tree.root)

console.log("Árvore Binária de Busca (inorder-invert):");
tree.inorderTraversal(tree.root);