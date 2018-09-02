<template>
  <v-container>
    <v-layout row>
      <v-flex xs6>
        <div class="px-5">
          <v-layout row wrap>
            <v-flex xs1 offset-xs5>
              <div id="id34" ref="ref34" class="blue-ground">34</div>
            </v-flex>
          </v-layout>
          <v-divider class="my-4"></v-divider>
          <v-layout row wrap class="mt-2">
            <v-flex xs1 offset-xs4>
              <div id="23" ref="ref23" class="blue-ground">23</div>
            </v-flex>
            <v-flex xs1 offset-xs1>
              <div id="92" ref="ref92" class="blue-ground">92</div>
            </v-flex>
          </v-layout>
          <v-divider class="my-4"></v-divider>

          <v-layout row wrap class="mt-2">
            <v-flex xs1 offset-xs3>
              <div id="12" ref="ref12" class="blue-ground">12</div>
            </v-flex>
            <v-flex xs1 offset-xs1>
              <div id="04" ref="ref4" class="blue-ground">04</div>
            </v-flex>

          </v-layout>
          <v-divider class="my-4"></v-divider>
          <v-layout row wrap class="mt-2">
            <v-flex xs1 offset-xs4>
              <div id="16" ref="ref16" class="blue-ground">16</div>
            </v-flex>
            <v-flex xs1 offset-xs1>
              <div id="09" ref="ref9" class="blue-ground">09</div>
            </v-flex>
          </v-layout>
        </div>
        <div class="mt-2 ml-5">
          <v-layout row wrap>
            <v-flex xs1 class="mt-5 ml-5" v-for="(val, index) in traversedArray" :key="index">
              <div style="border:2px solid black" class=" pl-2">{{val}}</div>
            </v-flex>
          </v-layout>
        </div>
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
let c34 = true;
let travesedArray = [];
let refHalf = {
  34: "",
  23: "",
  92: "",
  12: "",
  4: "",
  16: "",
  9: ""
};
class Node {
  constructor(data) {
    this.depth;
    this.data = data;
    this.left = null;
    this.right = null;
    this.visible = false;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    this.root = new Node(34);
    this.root.left = new Node(23);
    this.root.left.left = new Node(12);
    this.root.left.right = new Node(4);
    this.root.left.right.left = new Node(16);
    this.root.left.right.right = new Node(9);
    this.root.right = new Node(92);
    // console.log(this.root)
  }

  getRootNode() {
    return this.root;
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      travesedArray.push(node.data);

      this.inorder(node.right);
      // setTimeout(() => this.inorder(node.left), 5000);
      // setTimeout(() => this.blinkStatus(node.data), 3000);
      // setTimeout(this.blinkStatus(node.data), 3000);

      // // var x = setTimeout(this.blinkStatus(node, false), 2000);
      // setTimeout(() => this.inorder(node.right), 5000);
    }
  }
  preorder(node) {
    if (node != null) {
      travesedArray.push(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);

      console.log(node.data);
      travesedArray.push(node.data);
    }
  }
  blinkStatus(val) {
    refHalf[val].classList.toggle("toggle-color");
  }
}
export default {
  data: function() {
    return {
      BST: Object,
      traveralType: "",
      newArray: travesedArray
    };
  },
  components: {
    Task1Right
  },

  mounted() {
    refHalf[34] = this.$refs["ref34"];
    refHalf[23] = this.$refs["ref23"];
    refHalf[92] = this.$refs["ref92"];
    refHalf[12] = this.$refs["ref12"];
    refHalf[4] = this.$refs["ref4"];
    refHalf[16] = this.$refs["ref16"];
    refHalf[9] = this.$refs["ref9"];
  },

  computed: {
    traversedArray() {
      this.newArray = this.newArray;
      return travesedArray;
    }
  },

  created() {
    this.BST = new BinarySearchTree();
    this.BST.insert();
  },
  methods: {
    setTreeTraversal(val) {
      var root = this.BST.getRootNode();

      this.traveralType = val;
      switch (val) {
        case "Inorder":
          travesedArray = [];
          this.newArray = [];
          this.BST.inorder(root);
          break;
        case "Preorder":
          travesedArray = [];
          this.newArray = [];
          this.BST.preorder(root);
          break;
        case "Postorder":
          travesedArray = [];
          this.newArray = [];
          this.BST.postorder(root);
          break;
      }
    }
  }
};
</script>
