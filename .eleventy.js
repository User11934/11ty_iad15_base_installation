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

    // Environment detection
    const isGitHubPages = process.env.GITHUB_PAGES === "true";
    console.log("Building for GitHub Pages:", isGitHubPages);

    const config = {
        dir: {
            input: "src",
            output: "docs"
        }
    };

    // Only add pathPrefix for GitHub Pages
    if (isGitHubPages) {
        config.pathPrefix = "/11ty_iad15_base_installation";
    }

    return config;
}