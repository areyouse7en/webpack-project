<template lang="pug">
div
  Menu(mode="horizontal",active-name="home",@on-select="Jump")
    MenuItem(name="home")
      Icon(type="home")
      span 首页
    MenuItem(name="demoChildren1") 示例1
    MenuItem(name="demoChildren2") 示例2
  router-view
</template>

<script>
export default {
  methods: {
    Jump(name) {
      console.log(name)
      this.$router.push({ name })
    }
  }
}
</script>
