<!--
 * @creater: Hao1747943255 Hao1747943255@gmail.com
 * @since: 2022-11-29 20:50:34
 * @LastAuthor: Hao1747943255 Hao1747943255@gmail.com
 * @lastTime: 2022-12-15 16:51:46
 * @文件相对于项目的路径: \vue3-demo\vue-demo01\src\App.vue
 * @message: 
 * ! 行不行啊，细狗
-->
<script>
import headModer from "./components/headModel.vue";
import componApis from "./components/componsitionLx.vue";
import drotade from "./components/drotade.vue";
export default {
  components: {
    "head-model": headModer,
    "compon-apis": componApis,
    drotade,
  },
  data() {
    return {
      name: "",
      flag: false,
    };
  },
  mounted() {},
  methods: {
    numberless(max) {
      return Math.ceil(Math.random() * max); //Math.max(min, Math.ceil(Math.random() * max))
    },
    toggleFlag() {
      var arr = new Array(5);
      var num = randomNumber();
      var i = 0;
      randomArr(arr, num);
      function randomArr(arr, num) {
        if (arr.indexOf(num) < 0) {
          arr[i] = num;
          i++;
        } else {
          num = randomNumber();
        }
        if (i >= arr.length) {
          // console.log(arr);
          return arr;
        } else {
          randomArr(arr, num);
        }
      }
      function randomNumber() {
        return Math.floor(Math.random() * 31 + 2);
      }
      return arr;
    },
    delLast(str, target) {
      let reg = new RegExp(`${target}(?=([^${target}]*)$)`);
      return str.replace(reg, "");
    },
    printString(str) {
      console.log(new Set(str.split("")), "str");
    },
  },
};
</script>

<template>
  <main>
    <drotade></drotade>
    <br />
    <head-model v-if="flag" class="box"></head-model>
    <br />
    <compon-apis></compon-apis>
    <br />
    <button @click="flag = !flag">click</button>
    <br />
    {{ name }}
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <pre>
    23
    1 3 2
    3 21
  </pre
    >
    <code> 123 6465 1 456 </code>
    <hr />
    <menu>132刷卡后的风口浪尖深刻理解 数量的客服经理刷卡记录 </menu>
    <address>我家在黄土高坡傲哦</address>
    <input type="canlendar" name="" id="" />
  </main>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
