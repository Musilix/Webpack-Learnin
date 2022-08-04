const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist") // We can utilize node utilities like path to resolve the output path to a consistent name... in our case the directory name + /dist
    },

    /*
        The module attribute holds all the modules we've saved as devDependencies which we will need for webpack to properly parse our code.
        in the case of adding styles, we need to make sure to include the style-loader, css-loader, and for our css preprocessor, the sass-loader
    */
    module: {
        // The rules array includes basic regex (or rules) for helping webpack match specific files to the proper loader.
        rules: [
            {
                // This is the litmus test Webpack will use to determine if it's time to use a given loader from the use field.
                test: /\.scss$/,
                /*
                    It will use the given loaders once the given test passes, then process the file(s) matching the test with the loaders, converting them back to their primitive, browser-compatible state.
                    In our case, it will convert our scss files to css, then even further into JS so it can then be injected into an html page.
                   */
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    /*
        Loaders will do most of the heavy lifting for us, but we can use plugins to tap into the Webpack Bundling/compilation lifecycle directly.
        In our case, we can use a pre-built plugin which will intercept the bundling and find which imports, files, code, etc is taking up the most space of the bundle.
    */

    // plugins: [
    //     new BundleAnalyzerPlugin()
    // ],
    /* 
        Another way bundlers can hepl us out is by watching changes to our project and code and automatically recompile/build so we dont have to continue running npm run build or webpack.
        I was looking for something like this. All I had in my head was nodemon, but that's for a different use case I think

        After installing the webpack-dev-server dependency to our devDepdencies, we can utilize it when defining our devServer field
    */
    devServer: {
        // We can configure here which files we want to be served + the port we want them to be served on
        static: {
            directory: path.join(__dirname, "public")
        },
        port: 8080
    }

    // Note that the entry field can handle multiple inputs (nested in an obj) in order to enable code splitting, which breaks code bundles into smaller chunks and enables lazy loading of a site
    // so only the absolute necessities get loaded for a user when they need them, rather than brute loading everything all at once.
    // entry: {
    //     foo: "foo.js",
    //     bar: "bar.js"
    // }
}