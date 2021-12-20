// 11ty configuration
module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
  eleventyConfig.addPassthroughCopy("src/style.css");
};
 
//module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  //eleventyConfig.addPassthroughCopy("img");

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  //eleventyConfig.addPassthroughCopy("./src/style.css");

  // Copy any .jpg file to `_site`, via Glob pattern (in 0.9.0+)
  // Keeps the same directory structure.
  //eleventyConfig.addPassthroughCopy("./src/**/*.png");
//};
