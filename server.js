//
// Copyright © Will Merydith
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var express = require('express')
  , http = require('http')
  , path = require('path')
  , azure = require('azure')
  , site = require('./routes/site');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev;'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));    

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use('/json', require('./routes/json'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', site.index);