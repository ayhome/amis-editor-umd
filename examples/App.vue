<template>
  <div id="app">
    <amisEditor id="editorName" theme="cxd" className="is-fixed" :preview="isPreview" :isMobile="isMobile" @onChange="onChange" :value="schema"  ></amisEditor>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isPreview:false,
      isMobile:false,
      post: {
        json: '',
        amis_page_id: 15,
      },
      baseURL: 'https://beauty.tieninc.com/index.php/',

      schema: {},
    }
  },
  onLoad() {
    
  },
  methods: {
    onChange(e) {
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
