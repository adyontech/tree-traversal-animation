<template>
    <v-layout align-center row wrap>
        <v-overflow-btn depressed flat @input="select" :items="dropdown_opt" label="Select traversal" target="#dropdown-example"></v-overflow-btn>
    </v-layout>
</template>
<script>
export default {
  data: () => ({
    dropdown_opt: ["Inorder", "Preorder", "Postorder"]
  }),
  methods: {
    select(val) {
      console.log(val);
      switch (val) {
        case "Inorder":
          this.$emit("dropdownVal", "Inorder");
          break;
        case "Preorder":
          this.$emit("dropdownVal", "Preorder");
          break;
        case "Postorder":
          this.$emit("dropdownVal", "Postorder");
          break;
      }
    }
  }
};
</script>