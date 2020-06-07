<template>
    <div class="search" >
        <form v-on:submit.prevent="handleFilter"> // auto filtering search bar
            <label>Search :</label><input type="text" id="search" name="search" placeholder="Search..." v-model="searchText"/>
        </form>
    </div>
</template>
<script>
export default {
    name: 'search-bar',
    data() {
        return {
            searchText: ''   
        };
    },
    methods: {
        handleFilter() {
            this.$emit('filter', this.searchText); 
        }
    }
}
</script>
<style>
#search {
width:100%;
font-size:24px;
font-family: 'Roboto Condensed', sans-serif; padding:10px;
}
</style>