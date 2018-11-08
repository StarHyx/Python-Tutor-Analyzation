var webpack = require('webpack');

module.exports = {
    plugins: [
      new webpack.ProvidePlugin({
        jquery: "jquery",
        jQuery: "jquery",
        $: "jquery"
      }),
    ],

    resolve : {
        extensions: ['.ts', '.js', '.css'],

        alias: {
            "jquery": __dirname + "/src/lib/jquery-3.0.0.min.js",
            "$": __dirname + "/src/lib/jquery-3.0.0.min.js",
            "$.bbq": __dirname + "/src/lib/jquery.ba-bbq.js",
        }
    },

    entry: {
        'debugger': "./src/opt-live.ts",
    },

    output: {
        path: __dirname + "/build/",
        filename: "[name].bundle.js",
        sourceMapFilename: "[file].map",
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }, // CSS
            { test: /\.(png|jpg)$/, loader: 'url-loader' }, // images
            { test: /\.ts$/, loader: 'ts-loader' } // TypeScript
        ]
    },
};
