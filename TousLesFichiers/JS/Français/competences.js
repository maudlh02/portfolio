function devWeb() {
    var elem = document.getElementById("devWeb");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function dev() {
    var elem = document.getElementById("dev");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function data() {
    var elem = document.getElementById("data");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function env() {
    var elem = document.getElementById("env");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function res() {
    var elem = document.getElementById("res");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

  document.addEventListener('DOMContentLoaded', function() {
    devWeb();
    dev();
    data();
    env();
    res();
  });


function intellij() {
    var elem = document.getElementById("intellij");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function php() {
    var elem = document.getElementById("php");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function pycharm() {
    var elem = document.getElementById("pycharm");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 68) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function trello() {
    var elem = document.getElementById("trello");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function git() {
    var elem = document.getElementById("git");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function brackets() {
    var elem = document.getElementById("bra");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function word() {
    var elem = document.getElementById("word");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function powerpoint() {
    var elem = document.getElementById("point");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function excel() {
    var elem = document.getElementById("excel");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}


function scroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 && count == 0) {
    intellij();
      php();
      pycharm();
      trello();
      git();
      brackets();
      word();
      powerpoint();
      excel();
    count++;
  }
}

window.onscroll = function() {scroll()};

var count = 0;