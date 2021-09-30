import GeojsonLayer from './GeojsonLayer';
import Message from 'vue-iclient/src/common/message/index.js';
import init from 'vue-iclient/src/init';

GeojsonLayer.install = function(Vue, opts) {
  init(Vue, opts);
  Vue.prototype.$message = Message;
  Vue.component(GeojsonLayer.options ? GeojsonLayer.options.name : GeojsonLayer.name, GeojsonLayer);
};

export default GeojsonLayer;
