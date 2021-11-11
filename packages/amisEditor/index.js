import amisEditor from './src/amisEditor.vue';
amisEditor.install = function(Vue){
  Vue.component(amisEditor.name,amisEditor)
}

export default amisEditor;