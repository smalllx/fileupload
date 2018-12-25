var express = require('express')
var router = express.Router();
var fs = require('fs')
// const { COPYFILE_EXCL } = fs.constants;

var mutipart= require('connect-multiparty');
var mutipartMiddeware = mutipart();

router.post('/upload',mutipartMiddeware, function(req, res) {
    var data = new Date();
    data = data.getTime();
    var oldpath = req.files.avat.path;
    fs.copyFile(oldpath, './img/'+data+'.jpg', (err) => {
	    if (err) throw err;
	   	res.send({
	        'success':true,
	        'file':data+'.jpg'
	    })
	});
    
})
module.exports = router;