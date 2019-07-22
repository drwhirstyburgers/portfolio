<template>
<v-container bg fill-height grid-list-md tag="section" fluid>
    <div class="full-screen" v-bind:id="index" v-if="projectOne">
    <v-layout align-center justify-center row fill-height fluid>
        <v-layout id="l1">
        <v-flex id="b1" xs2>
            <v-flex tag="h2" id="title">{{project.title}}</v-flex>
            <v-icon  v-for="icon in project.languages" v-bind:icon="icon" v-bind:key="icon.id" color="white" id="icon">{{ icon }}</v-icon>
            <v-flex tag="h3">{{project.role}}</v-flex>
        </v-flex>
        <v-flex id="b2" xs8>
            <v-flex tag="p"><strong><u>Description:</u></strong>  {{project.description}} </br> <strong><u>Challenge:</u></strong>  {{project.challenges}} </br> <strong><u>Solutions:</u></strong>  {{project.solutions}} </br> <strong><u>Future Considerations:</u></strong>  {{project.futureConsiderations}} </v-flex>
        </v-flex>
        </v-layout>
    </v-layout>
    </div>
        <v-layout row>
        <v-flex xs6>
            <v-icon color="white" size="50px" id="c1">chevron_left</v-icon>
        </v-flex>
        <v-flex xs6 id="c2">
            <v-spacer></v-spacer><v-icon @click="changeProject" color="white" size="50px">chevron_right</v-icon>
        </v-flex>
    </v-layout>
    <div class="full-screen" v-bind:id="index" v-if="projectTwo">
    <v-layout align-center justify-center row fill-height fluid>
        <v-layout id="l1">
        <v-flex id="b1" xs2>
            <v-flex tag="h2" id="title">{{project2.title}}</v-flex>
            <v-icon  v-for="icon in project2.languages" v-bind:icon="icon" v-bind:key="icon.id" color="white" id="icon">{{ icon }}</v-icon>
            <v-flex tag="h3">{{project2.role}}</v-flex>
        </v-flex>
        <v-flex id="b2" xs8>
            <v-flex tag="p"><strong><u>Description:</u></strong>  {{project2.description}} </br> <strong><u>Challenge:</u></strong>  {{project2.challenges}} </br> <strong><u>Solutions:</u></strong>  {{project2.solutions}} </br> <strong><u>Future Considerations:</u></strong>  {{project2.futureConsiderations}} </v-flex>
        </v-flex>
        </v-layout>
    </v-layout>
    <v-layout row>
        <v-flex xs6>
            <v-icon color="white" size="50px" id="c1">chevron_left</v-icon>
        </v-flex>
        <v-flex xs6 id="c2">
            <v-spacer></v-spacer><v-icon @click="changeProject()" color="white" size="50px">chevron_right</v-icon>
        </v-flex>
    </v-layout>
    </div>
    <div class="full-screen" v-bind:id="index" v-if="projectThree">
    <v-layout align-center justify-center row fill-height fluid>
        <v-layout id="l1">
        <v-flex id="b1" xs2>
            <v-flex tag="h2" id="title">{{project3.title}}</v-flex>
            <v-icon  v-for="icon in project3.languages" v-bind:icon="icon" v-bind:key="icon.id" color="white" id="icon">{{ icon }}</v-icon>
            <v-flex tag="h3">{{project3.role}}</v-flex>
        </v-flex>
        <v-flex id="b2" xs8>
            <v-flex tag="p"><strong><u>Description:</u></strong>  {{project3.description}} </br> <strong><u>Challenge:</u></strong>  {{project3.challenges}} </br> <strong><u>Solutions:</u></strong>  {{project3.solutions}} </br> <strong><u>Future Considerations:</u></strong>  {{project3.futureConsiderations}} </v-flex>
        </v-flex>
        </v-layout>
    </v-layout>
    <v-layout row>
        <v-flex xs6>
            <v-icon color="white" size="50px" id="c1">chevron_left</v-icon>
        </v-flex>
        <v-flex xs6 id="c2">
            <v-spacer></v-spacer><v-icon @click="changeProject()" color="white" size="50px">chevron_right</v-icon>
        </v-flex>
    </v-layout>
    </div>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            project: {
                title: "IBM Cognos Scraper API",
                languages: ["fab fa-html5", "devicon-bootstrap-plain", "fab fa-js-square", "fab fa-vuejs", "devicon-ruby-plain", "devicon-rails-plain"],
                role: "Lead Developer",
                description: "An API that could host a headless browser in order to scrape, parse and assess IBM Cognos Analytics Reports that could then be used to drive character interactions in the Ametros Simulation Platform to assess a learner's Cognos skill level.",
                challenges: "As the cognos reports we needed to access were being constructed in trial accounts we found we couldn't access them via the API. Further, we needed a server that could run a headless browser.",
                solutions: "Using an EC2 server instance, a headless version of chrome and selenium we were able to create an API that took a learner's login credentials as arguments and scraped and parsed cognos reports and returned a rubric that assessed learners skill level. That data was then used to drive AI interactions in our platform.",
                futureConsiderations: "Given the brittle nature of web scraper, we are currently designing a slack app that returns messages in a dedicated channel with all the error messages that we built into the API so we can be kept abreast of any syntactical changes made to the IBM Cognos platform."
            },
            project2: {
                title: "NLU Auto-Tagging System",
                languages: ["fab fa-html5", "devicon-bootstrap-plain", "fab fa-js-square", "fab fa-vuejs", "devicon-ruby-plain", "devicon-rails-plain"],
                role: "Lead Developer",
                description: "An API that could host a headless browser in order to scrape, parse and assess IBM Cognos Analytics Reports that could then be used to drive character interactions in the Ametros Simulation Platform to assess a learner's Cognos skill level.",
                challenges: "As the cognos reports we needed to access were being constructed in trial accounts we found we couldn't access them via the API. Further, we needed a server that could run a headless browser.",
                solutions: "Using an EC2 server instance, a headless version of chrome and selenium we were able to create an API that took a learner's login credentials as arguments and scraped and parsed cognos reports and returned a rubric that assessed learners skill level. That data was then used to drive AI interactions in our platform.",
                futureConsiderations: "Given the brittle nature of web scraper, we are currently designing a slack app that returns messages in a dedicated channel with all the error messages that we built into the API so we can be kept abreast of any syntactical changes made to the IBM Cognos platform."
            },
            project3: {
                title: "Article Scraper",
                languages: ["fab fa-html5", "devicon-bootstrap-plain", "fab fa-js-square", "fab fa-vuejs", "devicon-ruby-plain", "devicon-rails-plain"],
                role: "Lead Developer",
                description: "An API that could host a headless browser in order to scrape, parse and assess IBM Cognos Analytics Reports that could then be used to drive character interactions in the Ametros Simulation Platform to assess a learner's Cognos skill level.",
                challenges: "As the cognos reports we needed to access were being constructed in trial accounts we found we couldn't access them via the API. Further, we needed a server that could run a headless browser.",
                solutions: "Using an EC2 server instance, a headless version of chrome and selenium we were able to create an API that took a learner's login credentials as arguments and scraped and parsed cognos reports and returned a rubric that assessed learners skill level. That data was then used to drive AI interactions in our platform.",
                futureConsiderations: "Given the brittle nature of web scraper, we are currently designing a slack app that returns messages in a dedicated channel with all the error messages that we built into the API so we can be kept abreast of any syntactical changes made to the IBM Cognos platform."
            },
            projectOne: true,
            projectTwo: false,
            projectThree: false,
            projectCount: 0
        }
    },
    methods: {
        changeProject() {
            if (this.count = 0){
                this.projectOne = false
                this.projectTwo = true
                this.projectCount = 1
            }
        }
    }
}
</script>

<style>
.full-screen {
    min-width: 100%;
    min-height: max-content;
}
#c2 {
    text-align: right;
}
section {
    overflow-x: scroll;
}
#icon {
    margin-right: 5px;
    margin-left: 3px;
}
h3 {
    color: grey;
}
#b1 {
    text-align: right;
    margin-right: 10px;
    margin-left: 40px;
}
#b2 {
    margin-left: 15px;
    margin-right: 30px;
}
#l1 {
    min-width: 250px;
}
#title{
    color: white;
}
</style>