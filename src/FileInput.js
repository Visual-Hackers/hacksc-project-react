// FileInput.js
// 2020-02-01
const Mux = require('../@mux/mux-node');
const { Video, Data } = new Mux();
const fs = require('fs');
const request = require('request');

Video.Uploads.create({
  cors_origin: 'localhost:3000',
  new_asset_settings: {
    playback_policy: 'policy'
  }
}).then(upload => {

});

const uploadURL = upload.url;
fs.createReadStream('path/to/file').pipe(request.put(uploadURL);

