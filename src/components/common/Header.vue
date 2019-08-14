<template>
    <div class="header">
        
    <div class="logo">后台管理系统</div>
    <div class="header-right">
        <div class="header-user-con">

            <div class="btn-bell">
                <el-tooltip effect="dark" :content="message? `有${message}条未读消息`:`消息中心` " placement="bottom">
                    <router-link to="/tabs">
                        <i class="el-icon-bell"></i>
                    </router-link>
                </el-tooltip>
                <span class="btn-bell-badge" v-if="message"></span>
            </div>
            <div class="user-avator"><img src="../../assets/img/img.jpg" alt=""></div>
        </div>
    </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            name:'Krt',
            message:2
        }
    },
}
</script>
<style scoped>

</style>