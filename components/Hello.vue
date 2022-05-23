<template>
  <div class="demo">
    <Button type="primary" @click="handleClick">Welcome!</Button>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  setup() {
  },
  methods: {
    handleClick() {
      this.$Message.info('Welcome to View UI Plus Demo!')
    }
  }
}
</script>

<style lang="less" scoped>
.demo{
  color: lightcoral;
  text-align: center;
  margin: 300px 0 0 0;
}
</style>
