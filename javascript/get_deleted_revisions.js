//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_deleted_revisions.js

    MediaWiki Action API Code Samples
    Demo of `Deletedrevs` module: List the six most recent deleted revisions from User:Catrope

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    drstart: "20070904235959",
    drend: "20070904000000",
    list: "deletedrevs",
    drprop: "revid|user|minor|len|token",
    drlimit: "6",
    druser: "Catrope",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});