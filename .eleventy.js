const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    eleventyConfig.setLibrary("md", markdownIt({
        html: true,
        typographer: true
    }));

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPassthroughCopy({
        "./public/css/bundle.css": "./css/bundle.css",
        "./public/css/prism-theme.css": "./css/prism-theme.css",
        "./public/images": "./images",
        "./public/icons": "./icons",
        "./public/plots": "./plots",
        "./public/js/script.js": "./js/script.js",
        "./public/resume.pdf": "./resume.pdf",
    });

    return {

    }
}