<template> <!-- vue实例外创建 -->
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>

        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header';
    export default{
        data(){
            return{
                tagsList:[],
                collapse:false
            }
        },
        components:{
            vHead
        },
    }
</script>