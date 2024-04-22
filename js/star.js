function flyStar(x, y){
    x -= 20;
    y = (1 + y * 1.17);
    if (x < 0) {
      x = Math.random(1) * 800;
      y=0;
    }
    h1.left = x;
    h1.top = y-22;
    setTimeout("flyStar(" + x + "," + y + ")", 110);
  }
  
  function start_flyStar() {
    switch(navigator.family) {
      case 'nn4':
        h1 = document.hosi;
        break;
      case 'ie4':
        h1 = document.all.hosi.style;
        break;
      default:
        h1 = document.getElementById("hosi").style;
        break;
    }
    flyStar(600,0);
  }
  