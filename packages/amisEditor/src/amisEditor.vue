<template>
  <div>
    <Editor id="editorName" :theme="theme" className="is-fixed" :preview="isPreview" :isMobile="isMobile" @onChange="onChange" :value="schema"  ></Editor>
  </div>
</template>
<script>

import 'amis/lib/themes/ang.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/sdk.css';
import 'amis-editor/dist/style.css'; 

import {Editor} from "amis-editor";
import {ReactInVue} from 'vuera';
export default {
  name:'amisEditor',
  components: {
    Editor: ReactInVue(Editor)
  },
  props: {
    isPreview: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    theme:{
      type: String,
      default: 'ang'
    },
    value: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      schema:{},
    }
  },
  mounted() {
    this.schema = this.value;
  },
  methods: {
    setSchema(obj){
      this.schema = obj;
    },
    getSchema(){
      return this.schema;
    },
    onChange(e) {
      this.$emit('onChange', e);
    },
  }
}
</script>