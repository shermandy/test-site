module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");

  // Custom filter to sort nav items by 'navOrder' frontmatter
  eleventyConfig.addFilter("sortByOrder", function(collection) {
    if (!collection) return [];
    return [...collection].sort((a, b) => {
      return (a.data.navOrder || 0) - (b.data.navOrder || 0);
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};