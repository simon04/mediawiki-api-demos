//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_page_images.js

    MediaWiki API Demos
    Demo of `Images` module: Send a GET request to obtain a JSON
	object listing all of the image files embedded on a single page

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    prop: "images",
    titles: "Albert Einstein",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});
