"use strict";

var mimetypes;

module.exports = class Person {
  constructor() {

    mimetypes = {
      "image/jpeg": ".jpg",
      "image/gif": ".gif",
      "image/bmp": ".bmp",
      "image/tiff": ".tiff",
      "image/png": ".png"
    };

  }

  getExtension (_mimeType) {
    if(_mimeType || typeof _mimeType !== 'undefined' ){
        return mimetypes[_mimeType]?mimetypes[_mimeType]:console.error('mime type no encontrado')
    }
  }
};
