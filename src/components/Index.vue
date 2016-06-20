<template>
    <div class="container">
        <div class="row">
            <div class="menu col-xs-12 col-sm-4">
                <Menu></Menu>        
            </div>
            <div class="menu_content col-xs-12 col-sm-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
    
</template>

<script>
    import Menu from './Menu';
    export default {
        components:{
            Menu
        }
    }
</script>