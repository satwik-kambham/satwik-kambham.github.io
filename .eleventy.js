module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./public/css/bundle.css": "./css/bundle.css",
    });

    return {

    }
}