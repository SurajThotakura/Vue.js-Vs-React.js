<template>
    <div id="cases-table">
        <table>
        <thead class="header">
            <tr>
                <td> Case ID </td>
                <td> Patient Name </td>
                <td> Type </td>
                <td> Clinician </td>
                <td> Status </td>
                <td> Last Updated </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pages in display" :key="pages.id">
                <td>{{'SP-'+pages.id}}</td>
                <td>{{pages.name}}</td>
                <td>{{pages.type}}</td>
                <td>{{pages.doctor}}</td>
                <td>
                    <div v-if="pages.status=='Closed'"><i class="greenTag"> </i> </div>
                    <div v-else-if="pages.status=='Open'"> <i class="yellowTag"></i></div>
                    <div v-else > <i class="redTag"></i></div>
                    {{pages.status}}
                </td>
                <td>{{pages.lastUpdated}}</td>
            </tr>
        </tbody>
        </table>
        <div class="pagination">
            <div style="float:left">
                <button v-if="page!= 0" class="previous"  @click="page--"> <i class="material-icons" style="font-size: 1.5rem;">navigate_before</i> </button>
                <button v-else class="previous" disabled><i class="material-icons" style="font-size: 1.5rem;">navigate_before</i></button>
            </div>
            <button class="pgBlock" v-on:click="page=0"> 1 </button>
            <button class="pgBlock" v-on:click="page=1"> <span v-if="this.page==0 || this.page== Math.ceil(this.cases.length/this.perPage)-1"> 2 </span> <span v-else> ... </span></button>

            <button class="pgBlock"> <span v-if="this.page==0 || this.page== Math.ceil(this.cases.length/this.perPage)-1"> ... </span> <span v-else > {{page+1}} </span></button>

            <button class="pgBlock" v-on:click="page=Math.ceil(cases.length/perPage)-2">
                <span v-if="this.page==0 || this.page== Math.ceil(this.cases.length/this.perPage)-1"> {{Math.ceil(this.cases.length/this.perPage)-1}}</span>
                <span v-else> ... </span>
            </button>

            <button class="pgBlock" v-on:click="page=Math.ceil(cases.length/perPage)-1"> {{Math.ceil(this.cases.length/this.perPage)}} </button>
            <div style="float:left">
                <button v-if="page!= Math.ceil(this.cases.length/this.perPage)-1" class="next" @click="page++"> <i class="material-icons">navigate_next</i></button>
                <button v-else class="next" disabled><i class="material-icons">navigate_next</i></button>
            </div>
        </div>
    </div>
</template>

<script>
import json from '../cases.json'
export default {
    name: 'cases-table',
    data(){
        return {
            cases: json,
            page: 0,
            perPage: 10,
            pages: [],
        }
    },
    methods:{
        makePages(){
            let totalPages = Math.ceil(this.cases.length/this.perPage);
            for(let i=1; i<=totalPages ; i++){
                this.pages.push(i);
            }
        },
        pagination(cases){
            let page = this.page;
            let perPage = this.perPage
            let from = ((page)*perPage);
            let to = (page+1)*perPage;
            return cases.slice(from,to);
        }
    },
    computed:{
        display(){
            return this.pagination(this.cases);
        }
    },
    watch: {
        pageNumbers(){
            this.makePages();
        }
    }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  font-size: 0.875rem;
  max-width: 100%;
}
header
thead th {
    border-bottom: 2px solid #e6e6e6;
}

td {
    border-bottom: 1px solid #e6e6e6;
    text-align: left;
    padding: .75rem 0rem .75rem 4rem;
}

.header {
    color:#999999;
    text-align: left;
    padding: .5rem 0rem .5rem 4rem;
    font-weight: bold;
    background-color: #f2f2f2;
}
.redTag{
    margin: 5px 4px 4px 0px;
    border-radius:4px;
    background-color: #FF5E5E;
    width:.5rem;
    height:.5rem;
    float:left;
}
.greenTag{
    margin: 5px 4px 4px 0px;
    border-radius:4px;
    background-color: #2ECC71;
    width:.5rem;
    height:.5rem;
    float:left;
}
.yellowTag{
    margin: 5px 4px 4px 0px;
    border-radius:4px;
    background-color: #F1C40F;
    width:.5rem;
    height:.5rem;
    float:left;
}
.pagination{
    float:right;
    color: #4a4a4a;
    margin-right: 2rem;
    margin-top: 5rem;
}
.pgBlock{
    float:left;
    padding: .5rem 0;
    font-size: 0.875rem;
    line-height: 1rem;
    border-style: solid;
    border-width: 2px 0px 2px 2px;
    border-color: #e6e6e6;
    width: 32px;
    cursor: pointer;
}
.next{
    padding: 0.125rem;
    border-radius: 0px 4px 4px 0px;
    border: 2px solid #e6e6e6;
    cursor: pointer;
}
.previous{
    padding: .125rem;
    border-radius: 4px 0px 0px 4px;
    border-style: solid;
    border-width: 2px 0px 2px 2px;
    border-color: #e6e6e6;
    cursor: pointer;
}
</style>