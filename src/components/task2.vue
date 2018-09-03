<template>
    <v-container>
        <v-layout align-center justify-center row fill-height>
            <v-flex xs8>
                <div v-if="!showEnterField">
                    <div class="caption">Enter how many input you have.</div>
                    <v-text-field color="grey darken-1" v-model="howMany" mask="##" outline single-line label="Enter total input"></v-text-field>
                </div>
                <div v-if="showEnterField && howMany !== 0">
                    <div class="caption">Press enter when done.</div>
                    <v-text-field @change="enterdVal" color="grey darken-3" v-model="inputVal" mask="####################################" outline single-line label="Enter your val..."></v-text-field>

                    <div class="title" v-if="allEnteredVal.length !==0">
                        You entered
                        <v-layout row>
                            <div class="mx-2" v-for="( num,index) in allEnteredVal" :key="index">
                                {{num}}
                            </div>
                        </v-layout>
                    </div>
                </div>
                <div class="title" v-if="showEnterField && howMany === 0">
                    <v-layout row>
                        Your result val
                        <span v-if="outputVal.length>1">s </span>
                        <span class="ml-1" v-if="outputVal.length===1"> is </span>
                        <span class="ml-1" v-if="outputVal.length>1">are </span> =
                        <div class="mx-5 mt-1 subheading" v-for="(num, index) in outputVal" :key="index">{{num}}</div>
                    </v-layout>
                </div>
                <v-btn color="primary" v-on:click="reset">Reset </v-btn>
                <v-btn color="primary" v-on:click="showField"> Start</v-btn>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    howMany: "",
    showEnterField: false,
    inputVal: "",
    allEnteredVal: [],
    outputVal: []
  }),
  methods: {
    reset: function() {
      this.howMany = "";
      this.showEnterField = false;
      this.inputVal = "";
      this.allEnteredVal = [];
    },

    showField: function() {
      if (this.howMany === "") return;
      this.showEnterField = true;
      this.inputVal = "";
      this.allEnteredVal = [];
      this.outputVal = [];
    },

    enterdVal: function(val) {
      // to toggle div and prevent unwanted input
      if (this.howMany === 0) {
        return;
      }
      // just to toggle the div
      this.howMany = parseInt(this.howMany) - 1;
      val = parseInt(val);
      this.allEnteredVal.forEach(currentItem => {
        if (currentItem === val) {
          console.log("matc found");
          // checking if output array already have element or not
          if (!this.outputVal.includes(val)) {
            this.outputVal.push(val);
          }
        }
      });
      // pushing elements
      this.allEnteredVal.push(val);
      // resetig the input field to blank
      this.inputVal = "";
    }
  }
};
</script>
