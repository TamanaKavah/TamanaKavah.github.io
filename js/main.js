function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

//first Cube Modal

var modal = [document.getElementById('moretext'),document.getElementById('moretext1'),document.getElementById('moretext2')
,document.getElementById('moretext3'),document.getElementById('moretext4'),document.getElementById('moretext5')];

var btn = [document.getElementById("readmore"),document.getElementById("readmore1"),document.getElementById("readmore2"),
document.getElementById("readmore3"),document.getElementById("readmore4"),document.getElementById("readmore5")];

var span = [document.getElementById("closediv"),document.getElementById("closediv1"),document.getElementById("closediv2"),
document.getElementById("closediv3"),document.getElementById("closediv4"),document.getElementById("closediv5"),];

for (let index = 0; index < btn.length && index < span.length && index < modal.length; index++) {
    btn[index].onclick = function () {
        modal[index].style.display = "block";
        span[index].onclick = function () {
            modal[index].style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal[index]) {
                modal[index].style.display = "none";
            }
        }
    }
}

//Second Cubde Modal

var modal1 = [document.getElementById('moretext2.0'),document.getElementById('moretext2.1'),document.getElementById('moretext2.2'),
document.getElementById('moretext2.3'),document.getElementById('moretext2.4'),document.getElementById('moretext2.5')];

var btn1 = [document.getElementById("readmore2.0"),document.getElementById("readmore2.1"),document.getElementById("readmore2.2"),
document.getElementById("readmore2.3"),document.getElementById("readmore2.4"),document.getElementById("readmore2.5")];

var span1 = [document.getElementById("closediv2.0"),document.getElementById("closediv2.1"),document.getElementById("closediv2.2"),
document.getElementById("closediv2.3"),document.getElementById("closediv2.4"),document.getElementById("closediv2.5"),];


for (let index = 0; index < btn1.length && index < span1.length && index < modal1.length; index++) {
    btn1[index].onclick = function () {
        modal1[index].style.display = "block";
        span1[index].onclick = function () {
            modal1[index].style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal1[index]) {
                modal1[index].style.display = "none";
            }
        }
    }
}

function darkTheme(){
    var info = [document.getElementById('body'),document.getElementById('darkThemeButton'),document.getElementById('openNav'),
    document.getElementById('lightThemeButton'),document.getElementById('contact'),document.getElementById('skill'),document.getElementById('animation')];

    info[0].style.backgroundColor = "black";
    info[0].style.color = "white";
    info[1].style.display = "none";
    info[2].style.color = 'white'
    info[3].style.display = "block";
    info[4].style.borderBottomColor = 'white';
    info[5].style.borderBottomColor = 'white';
    info[6].style.borderBottomColor = 'white';
//first cube side
    var cubeSide = [document.getElementById('side1'),document.getElementById('side2'),document.getElementById('side3'),
    document.getElementById('side4'), document.getElementById('side5'),document.getElementById('side6')]
    for (let i = 0; i < cubeSide.length; i++) {
        cubeSide[i].style.backgroundColor = "white";
        cubeSide[i].style.color = 'black';
    }
//second cube
    var cubeSide2 = [document.getElementById('side2.1'),document.getElementById('side2.2'),document.getElementById('side2.3'),
    document.getElementById('side2.4'), document.getElementById('side2.5'),document.getElementById('side2.6')]
    for (let i = 0; i < cubeSide2.length; i++) {
        cubeSide2[i].style.backgroundColor = 'black';
        cubeSide2[i].style.color = 'white';
    }

    //Modals
    sessionStorage.setItem("darkTheme", true);
    sessionStorage.setItem("lightTheme", false);
}

function lightTheme(){
    var info = [document.getElementById('lightThemeButton'),document.getElementById('body'),document.getElementById('openNav'),
    document.getElementById('contact'),document.getElementById('skill'),document.getElementById('animation'),document.getElementById('darkThemeButton')];

    info[1].style.backgroundColor = "white"
    info[1].style.color = "black";
    info[0].style.display = "none";
    info[2].style.color = 'black';
    info[3].style.borderBottomColor = 'black';
    info[4].style.borderBottomColor = 'black';
    info[5].style.borderBottomColor = 'black';
    info[6].style.display = "block";
//first cube
    var cubeSide = [document.getElementById('side1'),document.getElementById('side2'),document.getElementById('side3'),
    document.getElementById('side4'), document.getElementById('side5'),document.getElementById('side6')]
    for (let i = 0; i < cubeSide.length; i++) {
        cubeSide[i].style.backgroundColor = "black";
        cubeSide[i].style.color = 'white';
    }
//second cube
    var cubeSide2 = [document.getElementById('side2.1'),document.getElementById('side2.2'),document.getElementById('side2.3'),
    document.getElementById('side2.4'), document.getElementById('side2.5'),document.getElementById('side2.6')]
    for (let i = 0; i < cubeSide2.length; i++) {
        cubeSide2[i].style.backgroundColor = 'white';
        cubeSide2[i].style.color = 'black';
    }
    sessionStorage.setItem("lightTheme", true);
    sessionStorage.setItem("darkTheme", false);
    //Modals
    //sessionSotrage.getItem
}

//getting the canvas
var canvas = document.getElementById('firstCanvas');
var context = canvas.getContext('2d');
//game
var firstpart;
var img;
var secondparts = [];
var startButton = document.getElementById('beginbtn');

function restart(){
    firstpart = new parts(0, 120, 15, 15, "black");
    // context.drawImage(this.image, this.x, this.y, this.width, this.height)
    secondparts = [];
    startButton.style.display = "none";
    gathering.stop();
    gathering.start();
}

var gathering = {
    start : function(){
        this.interval = setInterval(updateGame, 30);
        this.frame = 0;
        this.score = 0;
    },
    clear : function(){
        context.clearRect(0,0,canvas.width,canvas.height)
    },
    stop : function(){
        clearInterval(this.interval);
    }
}

function parts(x,y,width,height,color,type){
    this.x = x;
    this.y = y;
    this.type = type;
    if (this.type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedx = 0;
    this.speedy = 0;
    this.gravity = 0.04;
    this.gravitySpeed = 0;
    this.color = color;
    this.update = function(){
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.width,this.height);
        if (type == "image") {
            context.drawImage(this.image,this.x,this.y,this.width,this.height);
        }
    }
    this.moveParts = function(){
        this.gravitySpeed += this.gravity;
        this.x += this.speedx;
        this.y += this.speedy + this.gravitySpeed;
        this.bottom();
        this.roof();
    };
    this.bottom = function(){
        var bottom = canvas.height - this.height
        if(this.y > bottom){
            this.y = bottom;
            this.gravitySpeed = 0;
        }
    };
    this.roof = function(){
        if (this.y <= 0) {
            this.gravitySpeed = 0.5;
        }
    }
    this.crash = function(obs){
        var mainRight = this.x + (this.width);
        var obsLeft = obs.x;

        var mainLeft = this.x;
        var obsRight = obs.x + (obs.width);

        var mainTop = this.y;
        var obsBottom = obs.y + (obs.height);

        var mainBottom = this.y + (this.height);
        var obsTop = obs.y;

        var status = true;

        if ((mainBottom <  obsTop) || (mainTop > obsBottom) || (mainRight < obsLeft) || (mainLeft > obsRight)) {
            status = false;
        }
        return status
    }
}
//update the game second by second
function updateGame() {
    var x, y;
    for (i = 0; i < secondparts.length; i += 1) {
        if (firstpart.crash(secondparts[i])) {
            gathering.stop();
            startButton.style.display = "inline-block";
            return;
        }
        //correct
    }
    gathering.clear();
    gathering.frame += 1;
    if (gathering.frame == 1 || everyinterval(50)) {
        x = canvas.width;
        minHeight = 20;
        maxHeight = 100;
        height = Math.floor(Math.random() * (maxHeight-minHeight+1)+minHeight);
        minGap = 30;
        maxGap = 70;
        gap = Math.floor(Math.random() * (maxGap-minGap+1)+minGap);
//upper parts
        secondparts.push(new parts(x,0,10,height,"red"));
//lower parts
        secondparts.push(new parts(x,height+gap,10,x-height-gap,"red"));
        var scoreSpan = gathering.score += 1;
        document.getElementById('score').innerHTML = scoreSpan;
    }
    for (i = 0; i < secondparts.length; i += 1) {
        secondparts[i].x += -4;
        secondparts[i].update();//wroks
    }
    firstpart.moveParts();
    firstpart.update();//works
}

function move(n) {
    firstpart.gravity = n;
}

function everyinterval(n) {
    if ((gathering.frame / n) % 1 == 0) {
        return true;
    }
    return false;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
