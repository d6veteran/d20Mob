var npcs = [
  { name : 'Will', type : "Ranger", Str : 21},
  { name : 'Tom', type : "Bard", Str : 12},
  { name : 'Chuck', type : "Fighter", Str : 34},
  { name : 'Dale', type : "Wizard", Str : 15},
];


exports.view = function(req, res){
/*  res.render('users/view', {
    title: 'Viewing user ' + req.user.name,
    user: req.user
  });*/
};

exports.list = function(req, res){
	res.json(npcs);
};
