<template>
  <div>
    <div class="border">
        <label v-for="(item, index) in options1" :key="index">
            <input type="radio" v-model="value1" :value="item.value"  />
            <img :src="item.src" class="image" />
        </label>
        {{value1}}
    </div>
    <div class="opacity">
        <label v-for="(item, index) in options2" :key="index">
            <input type="radio" v-model="value2" :value="item.value"  />
            <img :src="item.src" class="image" />
        </label>
        {{value2}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options1: [
        { src: "static/img/logo.png", value: 1 },
        { src: "static/img/logo.png", value: 2 },
        { src: "static/img/logo.png", value: 3 },
        { src: "static/img/logo.png", value: 4 },
        { src: "static/img/logo.png", value: 5 }
      ],
      value1: 1,
      options2: [
        { src: "static/img/logo.png", value: 10 },
        { src: "static/img/logo.png", value: 20 },
        { src: "static/img/logo.png", value: 30 },
        { src: "static/img/logo.png", value: 40 },
        { src: "static/img/logo.png", value: 50 }
      ],
      value2: 30
    };
  }
};
</script>

<style scoped>
label > input {
  visibility: hidden;
  position: absolute;
}
label > img {
  width: 64px;
  height: 64px;
}
label > input + img {
  cursor: pointer;
  border: 2px solid transparent;
}
.border > label > input:checked + img {
  border: 2px solid #f00;
}
.opacity > label > input + img {
  opacity: 0.5;
}
.opacity > label > input:checked + img {
  opacity: 1;
}
</style>
