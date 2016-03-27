var docbaseConfig = {
  "method": "file",
  "map": {
    "file": "map.json",
    "path": ""
  },
  "generic": {
    "baseurl": "",
    "path": "docs"
  },
  "file": {
    "path": "docs"
  },
  "github": {
    "user": "",
    "repo": "",
    "path": "",
    "branch": "",
    "access_token": ""
  },
  "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "html5mode": false,
  "versions" : {
    "v1": [{
      "name": "sample",
      "label": "Sample Label",
      "files": [{
        "name": "sample1",
        "label": "Sample 1 Doc"
      },]
    }, {
      "name": "howtostart",
      "label": "How to start",
      "files": [{
        "name": "starting",
        "label": "Starting with docbase"
      }]
    }],
    "v2": [{
      "name": "sample",
      "label": "Sample Label",
      "files": [{
        "name": "sample1",
        "label": "Sample 2 Doc"
      }]
    }]
  }
}
