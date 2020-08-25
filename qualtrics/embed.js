Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	var res = "${e://Field/ResponseID}";
	var q = this.questionId;
	window.localStorage.setItem('response', res); 
	window.localStorage.setItem('survey', q);
	document.getElementById('photoupload').onchange = function(e) {
            console.log('adding da foto')
            var files = document.getElementById("photoupload").files;
            if (!files.length) {
            return alert("Please choose a file to upload first.");
            }
            var file = files[0];
            var fileName = file.name;
            console.log(file.type)
        
            var photoKey = fileName;
        
            var bucket = new AWS.S3({params: {Bucket: 'mbutler'}});
            var params = {Key: fileName, ContentType: file.type, Body: file};
            bucket.upload(params, function (err, data) {
                console.log(err ? 'ERROR!' : 'UPLOADED.');
            });
        };


});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});