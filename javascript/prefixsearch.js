//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    prefixsearch.js

    MediaWiki API Demos
    Demo of `Prefixsearch` module: Perform a prefix search for page titles

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "prefixsearch",
    pssearch: "Star Wars",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});
