/**
 * Module dependencies
 */

var express = require('express');
var app = express();

var site = require('./routes/site'),
	npc = require('./routes/npc'),
	encounter = require('./routes/encounter');

// Config
app.configure(function(){
	app.use(express.logger());
    app.use(express.methodOverride());
    app.use(express.bodyParser());
	app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(app.router);
});

// Config - DEV
app.configure('development', function(){
	app.listen(8888);
	console.log('Express app started in development on port 8888.')

});

// Congif - PROD
app.configure('production', function(){
	app.use(express.errorHandler());
	app.listen(process.env.PORT || 8080);
	console.log('Express app started in production.')  
});


// *** Routes ****

// General
app.get('/', site.index);

// NCPs
app.all('/npcs', npc.list);
app.get('/npc/:id', npc.view);

// Encounters
app.get('/encounter/:id', encounter.view);