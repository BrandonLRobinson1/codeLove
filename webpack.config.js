const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates new html file
const CleanWebpackPlugin = require('clean-webpack-plugin'); // clearn dist folder

const nodeExternals = require('webpack-node-externals');


const frontEnd = {
  target: "web",
  mode: "development",
  entry: {
    app: './src/index.js',
    // upload: './upload/app.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index1.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // watch: true,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, //**************
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              // '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },

    ]
  }
};

const frontEnd2 = {
  target: "web",
  mode: "development",
  entry: {
    // app: './src/index.js',
    upload: './src/upload.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'picture Management',
      filename: 'upload.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // watch: true,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, //**************
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              // '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },

    ]
  }
};

const backEnd = {
  target: "node",
  mode: "development",
  entry: {
    server: './server/app.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 7777
  },
  // externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'],
  externals: [nodeExternals()],
  // plugins: [
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Output Management'
    // })
  // ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devServer: {
  //   // host: '0.0.0.0', // Required for docker
  //   publicPath: '/assets/',
  //   contentBase: path.resolve(__dirname, "./views"),
  //   watchContentBase: true,
  //   compress: true,
  //   port: 9001
  // },
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, //**************
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              // '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }
    ]
  }
};

module.exports = [ frontEnd, frontEnd2, backEnd ];

// const webpack = require('webpack');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates new html file
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // clearn dist folder

// const nodeExternals = require('webpack-node-externals');

// // module.exports = {
// //   entry: {
// //     'page1': './src/index.js',
// //     'page2': './src/upload.js'
// //   },
// //   output: {
// //     path: __dirname,
// //     filename: "apps/[name]/build/bundle.js"
// //   },
// //   plugins: [
// //     new HtmlWebpackPlugin({
// //       inject: false,
// //       chunks: ['page1'],
// //       filename: 'apps/page1/build/index.html'
// //     }),
// //     new HtmlWebpackPlugin({
// //       inject: false,
// //       chunks: ['page2'],
// //       filename: 'apps/page2/build/index.html'
// //     })
// //   ]
// // };

// const frontEnd = {
//   target: "web",
//   mode: "development",
//   // entry: {
//   //   app: './src/index.js',
//   //   upload: './src/upload.js'
//   // },
//   devtool: 'inline-source-map',
//   entry: {
//     'page1': './src/index.js',
//     'page2': './src/upload.js'
//   },
//   output: {
//     path: __dirname,
//     filename: "apps/[name]/build/bundle.js"
//   },
//   plugins: [
//     new CleanWebpackPlugin(['dist']),
//     new HtmlWebpackPlugin({
//       inject: false,
//       chunks: ['page1'],
//       filename: 'apps/page1/build/index.html'
//     }),
//     new HtmlWebpackPlugin({
//       inject: false,
//       chunks: ['page2'],
//       filename: 'apps/page2/build/index.html'
//     })
//   ],
//   // plugins: [
//     // new CleanWebpackPlugin(['dist']),
//   //   new HtmlWebpackPlugin({
//   //     title: 'Output Management',
//   //     inject: 'body', chunks: [ 'app' ], fileName: '/app.html'
//   //   }),
//   //   new HtmlWebpackPlugin({
//   //     title: 'pictcha Management',
//   //     entryPoint: 'x',
//   //     inject: 'body', chunks: [ 'upload' ], fileName: '/upload.html'
//   //   })
//   // ],
//   // output: {
//   //   // filename: '[name].bundle.js',
//   //   path: path.resolve(__dirname, 'dist'),
//   //   filename: path.join('assets', 'scripts', '[name].js'),
//   //   // path: path.resolve(__dirname, 'dist'),
//   //   chunkFilename: path.join('assets', 'scripts', '[name].[chunkhash].js'),
//   //   publicPath: '/'
//   // },
//   // watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/, //**************
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: [
//               '@babel/plugin-proposal-object-rest-spread',
//               // '@babel/plugin-transform-runtime'
//             ]
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//           'file-loader'
//         ]
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/,
//         use: [
//           'file-loader'
//         ]
//       },
//       {
//         test: /\.(csv|tsv)$/,
//         use: [
//           'csv-loader'
//         ]
//       },
//       {
//         test: /\.xml$/,
//         use: [
//           'xml-loader'
//         ]
//       },

//     ]
//   }
// };

// const backEnd = {
//   target: "node",
//   mode: "development",
//   entry: {
//     server: './server/app.js'
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     port: 7777
//   },
//   // externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'],
//   externals: [nodeExternals()],
//   // plugins: [
//     // new CleanWebpackPlugin(['dist']),
//     // new HtmlWebpackPlugin({
//     //   title: 'Output Management'
//     // })
//   // ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   // devServer: {
//   //   // host: '0.0.0.0', // Required for docker
//   //   publicPath: '/assets/',
//   //   contentBase: path.resolve(__dirname, "./views"),
//   //   watchContentBase: true,
//   //   compress: true,
//   //   port: 9001
//   // },
//   watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/, //**************
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: [
//               '@babel/plugin-proposal-object-rest-spread',
//               // '@babel/plugin-transform-runtime'
//             ]
//           }
//         }
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//           'file-loader'
//         ]
//       },
//       {
//         test: /\.(csv|tsv)$/,
//         use: [
//           'csv-loader'
//         ]
//       }
//     ]
//   }
// };

// module.exports = [ frontEnd, backEnd ];

// const webpack = require('webpack');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates new html file
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // clearn dist folder

// const nodeExternals = require('webpack-node-externals');


// const frontEnd = {
//   target: "web",
//   mode: "development",
//   entry: {
//     app: './src/index.js',
//     upload: './upload/app.js'
//   },
//   devtool: 'inline-source-map',
//   plugins: [
//     new CleanWebpackPlugin(['dist']),
//     new HtmlWebpackPlugin({
//       title: 'Output Management'
//     })
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   // watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/, //**************
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: [
//               '@babel/plugin-proposal-object-rest-spread',
//               // '@babel/plugin-transform-runtime'
//             ]
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//           'file-loader'
//         ]
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/,
//         use: [
//           'file-loader'
//         ]
//       },
//       {
//         test: /\.(csv|tsv)$/,
//         use: [
//           'csv-loader'
//         ]
//       },
//       {
//         test: /\.xml$/,
//         use: [
//           'xml-loader'
//         ]
//       },

//     ]
//   }
// };

// const backEnd = {
//   target: "node",
//   mode: "development",
//   entry: {
//     server: './server/app.js'
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     port: 7777
//   },
//   // externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'],
//   externals: [nodeExternals()],
//   // plugins: [
//     // new CleanWebpackPlugin(['dist']),
//     // new HtmlWebpackPlugin({
//     //   title: 'Output Management'
//     // })
//   // ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   // devServer: {
//   //   // host: '0.0.0.0', // Required for docker
//   //   publicPath: '/assets/',
//   //   contentBase: path.resolve(__dirname, "./views"),
//   //   watchContentBase: true,
//   //   compress: true,
//   //   port: 9001
//   // },
//   watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/, //**************
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: [
//               '@babel/plugin-proposal-object-rest-spread',
//               // '@babel/plugin-transform-runtime'
//             ]
//           }
//         }
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//           'file-loader'
//         ]
//       },
//       {
//         test: /\.(csv|tsv)$/,
//         use: [
//           'csv-loader'
//         ]
//       }
//     ]
//   }
// };

// module.exports = [ frontEnd, backEnd ];