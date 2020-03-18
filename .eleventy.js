module.exports = function(config) {

  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("css");
  return  {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};
