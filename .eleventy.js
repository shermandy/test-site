module.exports = function(eleventyConfig) {
  // Pass the Decap CMS folder straight through to the build
  eleventyConfig.addPassthroughCopy("admin");
  
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
