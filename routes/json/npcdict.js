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
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied
// See the License for the specific language governing permissions and
// limitations under the License.
//

var   send = require('./send')
    , azure = require('azure')
    , TableQuery = azure.TableQuery
    , tableName = 'npcdit';


exports.getAll = function(req, res, next){

	var query = TableQuery.select().from(tableName);
  	req.tableService.queryEntities(query, function (error, entities) {
		if(!error) {
			res.json(entities)
		}

	});
};

exports.getByType = function(req, res){
/*  res.render('users/view', {
    title: 'Viewing user ' + req.user.name,
    user: req.user
  });*/
};

exports.getByTypeAndName = function(req, res){
	res.json(npcs);
};
