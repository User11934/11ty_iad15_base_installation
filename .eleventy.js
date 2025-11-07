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

    // Use pathPrefix only when GITHUB_PAGES environment variable is set to true
    const isGitHubPages = process.env.GITHUB_PAGES === "true";

    return {
        dir: {
            input: "src",
            output: "docs"
        },
        pathPrefix: isGitHubPages ? "/11ty_iad15_base_installation" : "/"
    };
}