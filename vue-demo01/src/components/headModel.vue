<!--
 * @creater: Hao1747943255 Hao1747943255@gmail.com
 * @since: 2022-12-02 10:14:32
 * @LastAuthor: Hao1747943255 Hao1747943255@gmail.com
 * @lastTime: 2022-12-02 17:08:26
 * @文件相对于项目的路径: \vue3-demo\vue-demo01\src\components\headModel.vue
 * @message: 
 * 行不行啊，细狗
-->
<template>
  <teleport to="body">
    <div class="box" @click="$parent.flag = false">
      <!-- :="$attrs" 让input继承属性 -->
      <!-- <input :="$attrs" type="text" :value="name" @input="$emit('update:name', $event.target.value)" /> -->
      <div class="item">item</div>
    </div>
  </teleport>
</template>

<script>
export default {
  // inheritAttrs: false,//禁用默认继承
  props: ["name"],
  data () {
    return {};
  },
};
</script>
clearTimeout应当写在if外面,如果删除keyword到空是不会触发删除计时器的，这时候会发送空的无效请求
<style scoped lang="less">
.box {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999999;

  .item {
    width: 300px;
    height: 300px;
    border: 1px solid #eee;
    box-shadow: 2px 4px 4px 6px rgb(90, 90, 90);
    background-color: #fff;
  }
}
</style>
