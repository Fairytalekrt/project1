<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover" class="mgb20" style="height:252px;">
            <div class="user-info">
              <img src="../../assets/im" alt="">
            </div>
          </el-card>
        </el-col>
      </el-row>
        <el-row :gutter="20" >
            <el-col :span="8"></el-col>
        </el-row>
  </div>
</template>
<script>
    import Schart from "vue-schart";
    
    export default {
      name:'dashboard',
      data(){
        return{

        }
      }
    };
</script>