<template>
<v-container bg fill-height grid-list-md tag="section">
    <v-layout v-for="project in projects" v-bind:project="project" v-bind:key="project.id" align-center justify-center row fill-height>
        <v-flex id="b1" xs2>
            <v-flex tag="h2" id="title">{{project.title}}</v-flex>
            <v-icon  v-for="icon in project.languages" v-bind:icon="icon" v-bind:key="icon.id" color="white" id="icon">{{ icon }}</v-icon>
            <v-flex tag="h3">{{project.role}}</v-flex>
        </v-flex>
        <v-flex xs10>
            <v-flex tag="p"><strong><u>Description:</u></strong>  {{project.description}} </br> <strong><u>Challenge:</u></strong>  {{project.challenges}} </br> <strong><u>Solutions:</u></strong>  {{project.solutions}} </br> <strong><u>Future Considerations:</u></strong>  {{project.futureConsiderations}}</v-flex>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            projects: [{
                title: "IBM Cognos Scraper API",
                languages: ["fab fa-html5", "devicon-bootstrap-plain", "fab fa-js-square", "fab fa-vuejs", "devicon-ruby-plain", "devicon-rails-plain"],
                role: "Lead Developer",
                description: "An API that could host a headless browser in order to scrape, parse and assess IBM Cognos Analytics Reports that could then be used to drive character interactions in the Ametros Simulation Platform to assess a learner's Cognos skill level.",
                challenges: "As the cognos reports we needed to access were being constructed in trial accounts we found we couldn't access them via the API. Further, we needed a server that could run a headless browser.",
                solutions: "Using an EC2 server instance, a headless version of chrome and selenium we were able to create an API that took a learner's login credentials as arguments and scraped and parsed cognos reports and returned a rubric that assessed learners skill level. That data was then used to drive AI interactions in our platform.",
                futureConsiderations: "Given the brittle nature of web scraper, we are currently designing a slack app that returns messages in a dedicated channel with all the error messages that we built into the API so we can be kept abreast of any syntactical changes made to the IBM Cognos platform."
            }]
        }
    }
}
</script>

<style>
#icon {
    margin-right: 5px;
    margin-left: 3px;
}
h3 {
    color: grey;
}
#b1 {
    text-align: right;
    margin-right: 5px;
}
#title{
    color: white;
}
</style>