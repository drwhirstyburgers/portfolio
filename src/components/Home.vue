<template>
  <v-container bg fill-height grid-list-md tag="section">
    <v-layout row wrap align-center>
      <v-flex>
        <v-layout column>
          <v-flex tag="h1">HELLO.</v-flex>
          <v-flex>
            <v-card flat color="black">
              <v-card-text class="white--text">
                MY NAME IS DAVID HIRST AND I AM A FULL STACK DEVELOPER WHO IS PASSIONATE ABOUT WRITING CLEAN, MAINTAINABLE CODE. I AM MOST FULFILLED WHEN I AM BEING CHALLENGED AND LEARNING.
                I CURRENTLY WORK FOR AN EDUCATIONAL SOFTWARE COMPANY WHERE I HELP TO DEVELOP AND MAINTIAN AI BASED EXPERIENTIAL LEARNING
                SIMULATIONS. MY MOST RECENT PROJECT INVOLVED ARCHITECTING AND DEVELOPING SOFTWARE THAT COULD PARSE IBM COGNOS ANALYTICS
                REPORTS AND DRIVE NLP AI INTERACTIONS WITH THE DATA. I LIVE TO WORK THROUGH DIFFICULT PROBLEMS
                AND DELIVER PERFORMANT AND CREATIVE SOLUTIONS. I AM CURRENTLY ENROLLED IN A MACHINE LEARNING COURSE AND HOPE TO CONFIDENTLY ADD THAT TO MY REPERTOIRE SOON.
              </v-card-text>
            </v-card>
          </v-flex>
          </v-layout>
          <v-layout>
          <v-flex>
            <v-card color="black">
              <v-card-text id="secondp" class="white--text">
                  I AM ALWAYS LOOKING TO GET INVOLVED IN NEW PROJECTS. 
                  <h2>IF YOU HAVE ANY FREELANCE WORK PLEASE DON'T HESITATE TO CONTACT ME.</h2>
                  <h3>YOU CAN REACH ME BY EMAIL <a href = "mailto: dave.hirst50@gmail.com">HERE</a>.</h3>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
          </v-flex>
          <v-flex>
            <v-card color="black" class="text-xs-center">
              <v-card-text id="secondp" class="white--text">
                <v-icon  v-for="icon in icons" v-bind:icon="icon" v-bind:key="icon.id" color="white" style="font-size: 45px;" class="icons">{{ icon }}</v-icon>
              </v-card-text>
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
    return {
      icons: ["fab fa-html5", "fab fa-css3-alt", "devicon-bootstrap-plain", "fab fa-node-js", "fab fa-js-square", "fab fa-vuejs", "fab fa-react", "devicon-ruby-plain", "devicon-rails-plain", "devicon-postgresql-plain", "devicon-git-plain", "devicon-heroku-original"]
    };
  },
}
</script>"

<style>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One&display=swap");
#grid {
  font-family: "Fjalla One", sans-serif;
}
h1 {
  color: azure;
}
.icons {
    margin-left: 10px;
}
#secondp {
    text-align: center;
}
.spaced {
    height: 80px;
}
</style>