<template>
  <v-container id="grid" grid-list-sm tag="section">
    <v-layout row wrap>
      <v-flex tag="h1">WELCOME</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat color="black">
              <v-card-text class="white--text">
                MY NAME IS DAVID HIRST AND I AM A FULL STACK DEVELOPER WHO IS PASSIONATE ABOUT WRITING CLEAN, MAINTAINABLE CODE. I AM MOST FULFILLED WHEN I AM BEING CHALLENGED AND LEARNING.
                I CURRENTLY WORK FOR AN EDUCATIONAL SOFTWARE COMPANY WHERE I HELP TO DEVELOP AND MAINTIAN AI BASED EXPERIENTIAL LEARNING
                SIMULATIONS. MY MOST RECENT PROJECT INVOLVED ARCHITECTING AND DEVELOPING SOFTWARE THAT COULD PARSE IBM COGNOS ANALYTICS
                REPORTS AND DRIVE NLP AI INTERACTIONS WITH THE DATA. I LIVE TO WORK THROUGH DIFFICULT PROBLEMS
                AND DELIVER PERFORMANT AND CREATIVE SOLUTIONS.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card color="black">
              <v-card-text id="secondp" class="white--text">
                  I AM ALWAYS LOOKING TO GET INVOLVED IN NEW PROJECTS. 
                  <h2>IF YOU HAVE ANY FREELANCE WORK PLEASE DON'T HESITATE TO CONTACT ME.</h2>
                  <h3>YOU CAN REACH ME BY EMAIL <a href = "mailto: dave.hirst50@gmail.com">HERE</a>.</h3>
              </v-card-text>
            </v-card>
          </v-flex>
          <div id="spaced">
          </div>
          <v-flex>
            <v-card color="black">
              <icon color="white">
                  vue
              </icon>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One&display=swap");
#grid {
  font-family: "Fjalla One", sans-serif;
}
h1 {
  color: azure;
}
#secondp {
    text-align: center;
}
#spaced {
    height: 100px;
}
</style>