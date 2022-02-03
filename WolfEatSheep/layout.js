'use strict';

var layout = layout||{};

layout.class = layout.class||{};

layout.class.Wolf=function(x,y){
    this.X=x;
    this.Y=y;
    this.radius=50;
};

layout.class.Sheep=function(x,y,state){
    this.X=x;
    this.Y=y;
    this.state=state; // state的值可以为0,1,2；0为闲置状态，1为在棋盘状态，2为被吃状态。
    this.radius=20;
};

layout.init=function(){
    
}

var chess = function( p ) {
    var screen_width,screen_height; //屏幕的宽和高
    var board_width=100;
    var board_startx=10;
    var board_starty=10;
    var width=board_width*4+20;
    var height=window.innerHeight;
    var canvasX=(window.innerWidth-width)/2;
    var canvasY=0;
    
    var canvas;
    
    var wolfs=[];
    var sheeps=[];
    
    var initMap=[
        ['no','no',    ,'no','no'],
        ['no',    ,    ,    ,'no'],
        [    ,    ,'L1',    ,    ],
        [    ,'Y1','Y2','Y3',    ],
        [    ,'Y4',    ,'Y5',    ],
        [    ,'Y6','Y7','Y8',    ],
        [    ,    ,'L2',    ,    ],
        ['no',    ,    ,    ,'no'],
        ['no','no',    ,'no','no']
    ];
    
    var init = function(){
        p.frameRate(60);
        p.background(0,255,255,255);
        
        canvas=p.createCanvas(width,height);
        canvas.position(canvasX,canvasY);
        
        wolfs.push(new Wolf(2,2));
        wolfs.push(new Wolf(6,2));
        
        sheeps.push(new Sheep(3,1,1));
        sheeps.push(new Sheep(3,2,1));
        sheeps.push(new Sheep(3,3,1));
        sheeps.push(new Sheep(4,1,1));
        sheeps.push(new Sheep(4,3,1));
        sheeps.push(new Sheep(5,1,1));
        sheeps.push(new Sheep(5,2,1));
        sheeps.push(new Sheep(5,3,1));
        for(var i=0;i<16;i++){
            sheeps.push(new Sheep(-1,-1,0));
        }
    };
    
    var redraw_chessboard = function(){
        p.background(100,100,100,100);
        p.fill(255,255,255,255);
        
        p.stroke(2);
        p.strokeWeight(2);
        
        //draw chess board         
        for(var i=0;i<5;i++){
            p.line(board_startx+board_width*i,board_starty+board_width*2,board_startx+board_width*i,board_starty+board_width*6);
            p.line(board_startx,board_starty+board_width*(i+2),board_startx+board_width*4,board_starty+board_width*(i+2));
        }
        p.line(board_startx+board_width*0,board_starty+board_width*2,board_startx+board_width*4,board_starty+board_width*6);
        p.line(board_startx+board_width*4,board_starty+board_width*2,board_startx+board_width*0,board_starty+board_width*6);
        
        p.line(board_startx+board_width*0,board_starty+board_width*4,board_startx+board_width*3,board_starty+board_width*1);
        p.line(board_startx+board_width*0,board_starty+board_width*4,board_startx+board_width*3,board_starty+board_width*7);
        p.line(board_startx+board_width*4,board_starty+board_width*4,board_startx+board_width*1,board_starty+board_width*1);
        p.line(board_startx+board_width*4,board_starty+board_width*4,board_startx+board_width*1,board_starty+board_width*7);
        
        p.line(board_startx+board_width,board_starty+board_width,board_startx+board_width*3,board_starty+board_width*1);
        p.line(board_startx+board_width,board_starty+board_width*7,board_startx+board_width*3,board_starty+board_width*7);
        
        p.line(board_startx+board_width*2,board_starty+board_width*2,board_startx+board_width*2,board_starty+board_width*0);
        p.line(board_startx+board_width*2,board_starty+board_width*6,board_startx+board_width*2,board_starty+board_width*8);
        
        p.line(board_startx+board_width*1,board_starty+board_width*1,board_startx+board_width*2,board_starty+board_width*0);
        p.line(board_startx+board_width*3,board_starty+board_width*1,board_startx+board_width*2,board_starty+board_width*0);
        
        p.line(board_startx+board_width*1,board_starty+board_width*7,board_startx+board_width*2,board_starty+board_width*8);
        p.line(board_startx+board_width*3,board_starty+board_width*7,board_startx+board_width*2,board_starty+board_width*8);
    };
    
    var redraw_chesspiece = function(){
        for(var i=0; i<wolfs.length;i++){
            p.circle(board_startx+wolfs[i].X*board_width,board_starty+wolfs[i].Y*board_width,wolfs[i].radius);
        }
        for(var i=0; i<sheeps.length;i++){
            var sheep=sheeps[i];
            if(sheep.state==1){
                p.circle(board_startx+sheep.X*board_width,board_starty+sheep.Y*board_width,sheep.radius);
            }
        }
        
    }
    
    p.preload=function(){
        var a=10;
    };

    p.setup = function() {
        init();
    };

    p.draw = function() {
        redraw_chessboard();
//         redraw_chesspiece();
    };
    
}

layout.init();