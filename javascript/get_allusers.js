//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_allusers.js

    MediaWiki API Demos
    Demo of `Allusers` module: Get all users, starting from those whose name begins with the string, 'Drov'.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    format: "json",
    list: "allusers",
    auprefix: "Drov"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});
