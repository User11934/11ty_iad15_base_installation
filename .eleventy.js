module.exports = function (eleventyConfig) {
    // Asset handling
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addWatchTarget("./src/css/");

    // Add collection for projects
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/projects/*.md");
    });

    return {
        dir: {
            input: "src",
            output: "docs"
        },
        pathPrefix: "/11ty_iad15_base_installation"
    };
}