<template>
<v-container bg fill-height grid-list-md tag="section" fluid>
    <div class="full-screen">
        <transition name="slide-fade">
        <v-layout align-center justify-center row fill-height fluid v-if="projectOne">
            <v-layout class="l1">
                <v-flex class="b1" xs2>
                    <v-flex tag="h2" id="title">{{project.title}}</v-flex>
                    <v-icon  v-for="icon in project.languages" v-bind:icon="icon" v-bind:key="icon.id" color="white" id="icon">{{ icon }}</v-icon>
                    <v-flex tag="h3">{{project.role}}</v-flex>
                </v-flex>
                <v-flex class="b2" xs8>
                    <v-flex tag="p"><strong><u>Description:</u></strong>  {{project.description}} </br> <strong><u>Challenge:</u></strong>  {{project.challenges}} </br> <strong><u>Solutions:</u></strong>  {{project.solutions}} </br> <strong><u>Future Considerations:</u></strong>  {{project.futureConsiderations}} </v-flex>
                </v-flex>
            </v-layout>
            <v-icon v-ripple v-if="!projectThree" @click="nextProject()" color="white" size="50px">chevron_right</v-icon>
        </v-layout>
        </transition>
        <transition name="slide-fade">
        <v-layout align-center justify-center row fill-height fluid v-if="projectTwo" transition="expand">
            <v-icon v-ripple color="white" size="50px" id="c1" @click="previousProject()">chevron_left</v-icon>
            <v-layout class="l1">
                <v-flex class="b1" xs2>
                    <v-flex tag="h2" id="title">{{project2.title}}</v-flex>
                    <v-icon  v-for="icon in project2.languages" v-bind:icon="icon" v-bind:key="icon.id" color="white" id="icon">{{ icon }}</v-icon>
                    <v-flex tag="h3">{{project2.role}}</v-flex>
                </v-flex>
                <v-flex class="b2" id="mid" xs8>
                    <v-flex tag="p"><strong><u>Description:</u></strong>  {{project2.description}} </br> <strong><u>Challenge:</u></strong>  {{project2.challenges}} </br> <strong><u>Solutions:</u></strong>  {{project2.solutions}} </br> <strong><u>Future Considerations:</u></strong>  {{project2.futureConsiderations}} </v-flex>
                </v-flex>
            </v-layout>
            <v-icon v-ripple @click="nextProject()" color="white" size="50px">chevron_right</v-icon>
        </v-layout>
        </transition>
        <transition name="slide-fade">
        <v-layout align-center justify-center row fill-height fluid v-if="projectThree" transition="expand">
            <v-icon v-ripple color="white" size="50px" id="c1" @click="previousProject()">chevron_left</v-icon>
            <v-layout class="l1">
                <v-flex class="b1" xs2>
                    <v-flex tag="h2" id="title">{{project3.title}}</v-flex>
                    <v-icon  v-for="icon in project3.languages" v-bind:icon="icon" v-bind:key="icon.id" color="white" id="icon">{{ icon }}</v-icon>
                    <v-flex tag="h3">{{project3.role}}</v-flex>
                </v-flex>
                <v-flex class="b2" xs8>
                    <v-flex tag="p"><strong><u>Description:</u></strong>  {{project3.description}} </br> <strong><u>Challenge:</u></strong>  {{project3.challenges}} </br> <strong><u>Solutions:</u></strong>  {{project3.solutions}} </br> <strong><u>Future Considerations:</u></strong>  {{project3.futureConsiderations}} </v-flex>
                </v-flex>
            </v-layout>
        </v-layout>
        </transition>
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
        nextProject() {
            if (this.projectCount == 0){
                this.projectOne = false
                this.projectTwo = true
                this.projectCount = 1
            } else if (this.projectCount == 1) {
                this.projectTwo = false
                this.projectThree = true
                this.projectCount = 2
            }
        },
        previousProject() {
            if(this.projectCount == 1) {
                this.projectTwo = false
                this.projectOne = true
                this.projectCount = 0
            }else if(this.projectCount == 2) {
                this.projectThree = false
                this.projectTwo = true
                this.projectCount = 1
            }
        },
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
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
#icon {
    margin-right: 5px;
    margin-left: 3px;
}
h3 {
    color: grey;
}
.b1 {
    display: block;
    text-align: right;
    margin-right: 5px;
}
.b2 {
    margin-left: 17px;
}
.l1 {
    min-width: 270px;
}
#title{
    color: white;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>