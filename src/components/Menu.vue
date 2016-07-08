<template>
    <ul class="nav nav-pills nav-stacked">
        <li v-link-active><a v-link="'/hello'">Hello</a></li>
        <li v-link-active><a v-link="'/todo'">Todo</a></li>
        <li v-link-active><a v-link="'/about'">About</a></li>
    </ul>
</template>
<style scoped="true">
    .v-link-active{
        background-color: #337ab7;
        color: white;
    }
</style>