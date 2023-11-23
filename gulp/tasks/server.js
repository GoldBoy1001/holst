// import { connect }from'gulp-connect';

export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`,
			// index: "*.html"
		},
		notify: false,
		port: 3000,
	});
}

// export const server = ()  => {
// 	connect.server({
// 		root: 'dist', // корневая папка
// 		livereload: true, // автоматическая перезагрузка страницы при изменениях
// 		middleware: function(connect, opt) {
// 		  return [
// 			 // определяем обработчик запросов по определенным url
// 			 (req, res, next) => {
// 				if (req.url === '/') {
// 				  res.writeHead(301, { 'Location': '/home' });
// 				  res.end();
// 				} else if (req.url === '/home') {
// 				  gulp.src('./dist/index.html')
// 					 .pipe(connect.reload());
// 				} else if (req.url === '/about') {
// 				  gulp.src('./dist/about.html')
// 					 .pipe(connect.reload());
// 				} else {
// 				  gulp.src('./dist/error.html')
// 					 .pipe(connect.reload());
// 				}
// 				next();
// 			 }
// 		  ]
// 		}
// 	 });
// }