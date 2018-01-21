<template lang="html">
  <div class="detail" >
{{msg}}
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: [
    'example'
  ],
  data() {
    return {
      msg: 'this is detail!'
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
</style>
