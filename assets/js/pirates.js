pirates.siteUrl = 'http://'+(document.location.hostname||document.location.host);
pirates.modal_triggers = document.body.querySelectorAll("a[data-modal]");


// Bind AJAX calls on click of target elements and displays is in modal
pirates.bindAjax = function(targets,root) {
  for (i = 0; i < targets.length; ++i) {
    //console.log(targets[i].getAttribute('href'));
    // do whatever
    targets[i].addEventListener("click", function(event) {
      //your handler here
      event.preventDefault();
      var url = event.target.getAttribute('href');
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var doc = this.responseXML;
        var modal = document.getElementsByClassName("l-micropage__modal")[0];
        var contentElement;
        var html = '';
        if (root === undefined) {
          contentElement = doc.getElementsByTagName("BODY");
        }else{
          contentElement = doc.querySelectorAll(root);
        }
        for (j = 0; j < contentElement.length; ++j) {
          var content = contentElement[j].innerHTML;
          html = html + content;
        }
        modal.innerHTML = html;
        modal.insertAdjacentHTML("afterend", '<span class=\"l-micropage__modal-close\">Zavřít</span>');
        modal.style.display = 'block';
        var closeTrigger = document.getElementsByClassName('l-micropage__modal-close')[0];
        closeTrigger.addEventListener("click", function(event) {
          modal.innerHTML = '';
          modal.style.display = 'none';
          closeTrigger.outerHTML = "";
          delete closeTrigger;
        });
      }

      xhr.open("GET", url);
      xhr.responseType = "document";
      xhr.send();
    }, false);
  };
};

// Executes FIFO cue of JS functions - good practice to decouple JS workout from onload
pirates.executeQue = function (que) {
  for(var q=0; q< que.length; q++){
    que[q].call(this);
  }
};

// Create CORS request - CORS is good for getting around cross domain restrictions
pirates.createCORSRequest = function (method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// converts CSV file to JSON string or JS object
//var csv is the CSV file with headers
pirates.csvToJSON = function (csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split(",");

    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);

  }
  return result; //JavaScript object
  //return JSON.stringify(result); //JSON
}

// when all is loaded start executing loop
pirates.executeQue(pirates.priorityStack);

