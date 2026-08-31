module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // Custom filter to sort nav items by 'navOrder' frontmatter
  eleventyConfig.addFilter("sortByOrder", function(collection) {
    if (!collection) return [];
    return [...collection].sort((a, b) => {
      return (a.data.navOrder || 0) - (b.data.navOrder || 0);
    });
  });

  // Add Markdown parsing filter for frontmatter/block content
  eleventyConfig.addFilter("markdown", function(content) {
    if (!content) return "";
    
    // Uses Eleventy's built-in markdown library instance
    const markdownIt = require("markdown-it")();
    return markdownIt.render(content);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};