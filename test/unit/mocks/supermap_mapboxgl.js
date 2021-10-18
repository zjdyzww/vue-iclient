import { fakeDataServiceResult, fakeMapServiceResult, fakeAddressMatch } from './services';
const supermap = {};

supermap.FeatureService = () => {
  return {
    getFeaturesBySQL: (param, callback) =>
      setTimeout(() => {
        callback(fakeDataServiceResult);
      }, 0),
    getFeaturesByBounds: (param, callback) =>
      setTimeout(() => {
        callback(fakeDataServiceResult);
      }, 0),
    getFeaturesByGeometry: (param, callback) =>
      setTimeout(() => {
        callback(fakeDataServiceResult);
      }, 0)
  };
};

supermap.QueryService = () => {
  return {
    queryBySQL: (param, callback) =>
      setTimeout(() => {
        callback(fakeMapServiceResult);
      }, 0),
    queryByBounds: (param, callback) =>
      setTimeout(() => {
        callback(fakeMapServiceResult);
      }, 0),
    queryByGeometry: (param, callback) =>
      setTimeout(() => {
        callback(fakeMapServiceResult);
      }, 0)
  };
};

supermap.AddressMatchService = () => {
  return {
    code: (param, callback) =>
      setTimeout(() => {
        callback(fakeAddressMatch);
      }, 0)
    // queryByBounds: (param, callback) => callback(fakeMapServiceResult)
  };
};

supermap.RankSymbolThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.MapService = () => {
  return {
    getMapInfo(callback) {
      setTimeout(() => {
        callback({});
      }, 0);
    }
  };
};

supermap.GraphThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.LabelThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.RangeThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.UniqueThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.MapvLayer = () => {
  return {};
};

supermap.Util = {
  hexToRgba: function (hex, opacity) {
    var color = [],
      rgba = [];
    hex = hex.replace(/#/, '');
    for (let i = 0; i < 6; i += 2) {
      color[i] = '0x' + hex.substr(i, 2);
      rgba.push(parseInt(Number(color[i])));
    }
    rgba.push(opacity);
    return 'rgba(' + rgba.join(',') + ')';
  }
};

module.exports = supermap;
