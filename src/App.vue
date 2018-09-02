<template>
  <v-app>
    <v-toolbar dark>
      <v-toolbar-title>Clarisight task</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Task-1</v-btn>
        <v-btn to="/task2" flat>Task-2</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
    <v-footer :fixed="false" app>
      <span>&copy; aadii104</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Vuetify.js"
    };
  }
};
</script>
