<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names //
eslint-disable-next-line prettier/prettier
<!--
 * @creater: Hao1747943255 Hao1747943255@gmail.com
 * @since: 2022-12-12 09:54:44
 * @LastAuthor: Hao1747943255 Hao1747943255@gmail.com
 * @lastTime: 2022-12-15 17:03:01
 * @文件相对于项目的路径: \vue3-demo\vue-demo01\src\components\drotade.vue
 * @message:
 * 行不行啊，细狗
-->
<template>
  <div class="box">
    <div class="container">
      <div class="pole">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="pole">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="pole">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="neon neon_a">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="neon neon_b">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="neon neon_c">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
*,
*::before,
*::after {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}

.box {
  width: 500px;
  height: 500px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 750px;
  overflow: hidden;

  .container {
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    -webkit-animation: rotate 80s infinite linear;
    animation: rotate 80s infinite linear;
  }

  @-webkit-keyframes rotate {
    from {
      transform: rotatex(0deg) rotateY(0deg) rotateZ(0deg);
    }

    to {
      transform: rotatex(360deg) rotateY(720deg) rotateZ(360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotatex(0deg) rotateY(0deg) rotateZ(0deg);
    }

    to {
      transform: rotatex(360deg) rotateY(720deg) rotateZ(360deg);
    }
  }

  .pole {
    position: absolute;
    transform-style: preserve-3d;
  }

  .pole:nth-child(1) {
    top: -150px;
  }

  .pole:nth-child(2) {
    top: 0px;
  }

  .pole:nth-child(3) {
    top: 150px;
  }

  .pole > div {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 25px rgb(255, 255, 255) inset;
    overflow: hidden;
  }

  .pole > div:nth-child(n + 3)::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(var(--clr0), var(--clr), var(--clr0));
    opacity: 0.25;
    -webkit-animation: poleBack 4s infinite ease-in-out alternate;
    animation: poleBack 4s infinite ease-in-out alternate;
  }

  @-webkit-keyframes poleBack {
    0% {
      transform: translate(-50%, calc(-50% + 175px));
    }

    100% {
      transform: translate(-50%, calc(-50% - 175px));
    }
  }

  @keyframes poleBack {
    0% {
      transform: translate(-50%, calc(-50% + 175px));
    }

    100% {
      transform: translate(-50%, calc(-50% - 175px));
    }
  }

  .pole:nth-child(1) > div::before {
    --clr: #0ff;
    --clr0: #0ff0;
  }

  .pole:nth-child(2) > div::before {
    --clr: #f0f;
    --clr0: #f0f0;
    -webkit-animation-duration: 3.2s;
    animation-duration: 3.2s;
  }

  .pole:nth-child(3) > div::before {
    --clr: #ff0;
    --clr0: #ff00;
    -webkit-animation-duration: 4.8s;
    animation-duration: 4.8s;
  }

  .pole > div:nth-child(1) {
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%) translateZ(200px);
  }

  .pole > div:nth-child(2) {
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%) translateZ(-200px);
  }

  .pole > div:nth-child(3) {
    width: 50px;
    height: 400px;
    transform: translate(-50%, -50%) rotateX(90deg) translateZ(25px);
  }

  .pole > div:nth-child(4) {
    width: 50px;
    height: 400px;
    transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg)
      translateZ(25px);
  }

  .pole > div:nth-child(5) {
    width: 50px;
    height: 400px;
    transform: translate(-50%, -50%) rotateX(90deg) rotateY(180deg)
      translateZ(25px);
  }

  .pole > div:nth-child(6) {
    width: 50px;
    height: 400px;
    transform: translate(-50%, -50%) rotateX(90deg) rotateY(270deg)
      translateZ(25px);
  }

  .neon {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 2px solid var(--clr);
    transform-style: preserve-3d;
    -webkit-animation: neonMove 4s infinite ease-in-out alternate;
    animation: neonMove 4s infinite ease-in-out alternate;
    box-shadow: 0 0 10px var(--clr) inset, 0 0 10px var(--clr);
  }

  .neon_a {
    --clr: #0ff;
    top: -150px;
  }

  .neon_b {
    --clr: #f0f;
    top: 0px;
    -webkit-animation-duration: 3.2s;
    animation-duration: 3.2s;
  }

  .neon_c {
    --clr: #ff0;
    top: 150px;
    -webkit-animation-duration: 4.8s;
    animation-duration: 4.8s;
  }

  .neon > div {
    position: absolute;
    background-color: var(--clr);
    box-shadow: 0 0 10px var(--clr);
  }

  .neon > div:nth-child(1) {
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: 2px;
    transform: translateY(-50%) rotateX(90deg);
  }

  .neon > div:nth-child(2) {
    top: -1px;
    left: -2px;
    width: 2px;
    height: calc(100% + 2px);
    transform: rotateY(90deg);
  }

  .neon > div:nth-child(3) {
    bottom: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: 2px;
    transform: translateY(50%) rotateX(90deg);
  }

  .neon > div:nth-child(4) {
    top: -1px;
    right: -2px;
    width: 2px;
    height: calc(100% + 2px);
    transform: rotateY(90deg);
  }

  @-webkit-keyframes neonMove {
    0% {
      transform: translate(-50%, -50%) translateZ(175px);
    }

    100% {
      transform: translate(-50%, -50%) translateZ(-175px);
    }
  }

  @keyframes neonMove {
    0% {
      transform: translate(-50%, -50%) translateZ(175px);
    }

    100% {
      transform: translate(-50%, -50%) translateZ(-175px);
    }
  }
}
</style>
