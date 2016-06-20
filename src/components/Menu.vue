<template>
    <ul class="nav nav-pills nav-stacked">
        <li><a v-link="'/hello'">Hello</a></li>
        <li><a v-link="'/todo/'">Todo</a></li>
        <li><a>About</a></li>
    </ul>
</template>
<style scoped="true">
    .v-link-active{
        background-color: #337ab7;
        color: white;
    }
</style>