<template>
<v-container bg fill-height grid-list-md tag="section">
    <v-layout row wrap align-center>
        <v-flex>
            <v-form
                ref="form"
                lazy-validation
            >
                <v-text-field
                    v-model="jobURL"
                    dark
                    label="Job Posting"
                    outlined
                    clearable
                ></v-text-field>
                <div class="text-center">
                    <v-spacer></v-spacer>
                    <v-btn @click="watsonCall">MATCH</v-btn>
                </div>
            </v-form>
        </v-flex>
        <p>{{response}}</p>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data () {
        return {
            apikey: "y0LQR-j44P6JdRN6911gXMDvmdzvlb-4iKfHkDG39jCk",
            iam_apikey_description: "Auto-generated for key 454c8ea0-3e95-4735-b60d-5c310eb6ceeb",
            iam_apikey_name: "Auto-generated service credentials",
            iam_role_crn: "crn:v1:bluemix:public:iam::::serviceRole:Manager",
            iam_serviceid_crn: "crn:v1:bluemix:public:iam-identity::a/620d19aa4276413c92e7bf5d3fa0646a::serviceid:ServiceId-4498b04b-6032-4406-aef9-3dcf1daa844d",
            url: "https://cors-anywhere.herokuapp.com/gateway-syd.watsonplatform.net/natural-language-understanding/api",
            jobURL: '',
            skills: [],
            response: ''
        }
    },
    methods: {
        watsonCall() {
            const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
            const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
                version: '2019-07-12',
                iam_apikey: this.apikey,
                url: this.url
            });
            const analyzeParams = {
                'url': this.jobURL,
                'features': {
                    'categories': {
                        'limit': 3
                    }
                }
            };

            naturalLanguageUnderstanding.analyze(analyzeParams)
                .then(analysisResults => {
                    this.response = JSON.stringify(analysisResults, null, 2);
                    console.log(this.response)
                })
                .catch(err => {
                    console.log('error:', err);
                });
            alert("This feature is still in production. Please come back soon.")
        }
    }
}
</script>

<style>
#tf {
    color: white;
}
</style>