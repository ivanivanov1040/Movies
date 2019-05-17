<template>
    <b-card-footer class="footer">This is a Driftboard&trade;</b-card-footer>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
              year: new Date().getFullYear()
            };
        }
    }
</script>

<style scoped>
    .footer{
        margin-top: 5px;
        background-color: blue;
        text-align: center;
        color: white;
        padding: 12px 18px;
    }
</style>