// FileInput.js
// 2020-02-01
const Mux = require('../@mux/mux-node');
const { Video, Data } = new Mux();

// Create Asset
const asset = Video.Assets.create({
  input: '',
});
