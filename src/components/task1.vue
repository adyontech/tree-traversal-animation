<template>
    <v-container>
        <v-layout>
            <v-flex xs6>

            </v-flex>
            <v-flex xs6>
                <Task1Right v-on:dropdownVal="setTreeTraversal($event)" />
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style>
.blue-ground {
  color: white;
  background-color: blue;
  border: black 2px solid;
  border-radius: 84%;
  height: 50px;
  padding: 25%;
  width: 100%;
}
.toggle-color {
  background-color: green !important;
}
</style>

<script>
import Task1Right from "./task1Right";
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) node.right = newNode;
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  getRootNode() {
    return this.root;
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log("45");
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node != null) {
      console.log(node.data);

      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);

      console.log(node.data);
      this.blinkStatus(node, true);
      var x = setTimeout(this.blinkStatus(node, false), 2000);
    }
  }
}
export default {
  data: function() {
    return {
      BST: Object,
      traveralType: "",
      context: null
    };
  },
  components: {
    Task1Right
  },

  mounted() {},

  computed: {},

  created() {
    this.BST = new BinarySearchTree();
    [34, 23, 92, 12, 4, 16, 9].forEach(el => this.BST.insert(el));

    console.log(this.BST);
  },
  methods: {
    setTreeTraversal(val) {
      var root = this.BST.getRootNode();

      this.traveralType = val;
      switch (val) {
        case "Inorder":
          this.BST.inorder(root);
          break;
        case "Preorder":
          this.preorder();
          break;
        case "Postorder":
          this.postorder();
          break;
      }
    }
  }
};
</script>
