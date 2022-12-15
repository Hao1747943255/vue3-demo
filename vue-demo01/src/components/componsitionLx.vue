<!-- eslint-disable prettier/prettier -->
<!--
 * @creater: Hao1747943255 Hao1747943255@gmail.com
 * @since: 2022-12-09 14:45:10
 * @LastAuthor: Hao1747943255 Hao1747943255@gmail.com
 * @lastTime: 2022-12-15 17:11:49
 * @文件相对于项目的路径: \vue3-demo\vue-demo01\src\components\componsitionLx.vue
 * @message: 
 * 行不行啊，细狗
-->
<template>
  <div>
    {{ str }}
  </div>
  <div>
    {{ user.username }}
    <br />
    <input type="text" v-model="user.username">
  </div>
  <div>
    {{ user.password }}
    <br />
    <input type="password" @change="changePas" v-model="user.password">
  </div>
  <div><button @click="showStr">获取str</button></div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup (props) {
    //ref 定义数值、字符串、数组、布尔 reactive 定义对象
    let str = ref("hellow world");
    let user = reactive({
      username: "张三",
      password: 123456,
    });
    let userinfo = reactive({
      username: "李四",
      password: 654321,
    });
    const changePas = () => {
      console.log(user.password, "password");
    };
    const showStr = () => {
      console.log(str.value, "str");
    };
    return {
      str,
      user,
      changePas,
      showStr,
    };
  },
};
</script>
<style scoped>

</style>
