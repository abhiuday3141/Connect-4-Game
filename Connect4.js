player1=localStorage.getItem('name1')
var player1Color='rgb(86, 151, 255)'
player2=localStorage.getItem('name2')
var player2Color='rgb(237, 45, 73)'

function myFunction() {
    var popup = document.getElementById("instructions");
    popup.classList.toggle("show");
    
  }

 



var table=$('table tr')

function reportWin(row,col){
    console.log("You won ");
}

function changeColor(row,col,color){

    table.eq(row).find('td').eq(col).find('button').css('background-color',color)
}
function returnColor(row,col,color){
    return table.eq(row).find('td').eq(col).find('button').css('background-color')
}

function checkBottom(col){
    var colorReport = returnColor(5,col);
    
    for(var row=5;row>-1;row--){
        colorReport=returnColor(row,col);

        if(colorReport==='rgb(128, 128, 128)'){
    
            return row;
        }
    }
}



function colorMatchCheck(one,two,three,four){
    return (one===two && one===three && one===four && one!=='rgb(128,128,128)' && one!==undefined)

}


// Check for Horizontal Wins
function horizontalWinCheck(row,col){
   
      for(var i=0;i<4;i++)
      {
          var colidx=col-i;
          if(colorMatchCheck(returnColor(row,colidx), returnColor(row,colidx+1) ,returnColor(row,colidx+2), returnColor(row,colidx+3)))
          {
             return true;
          }
      }

      return false;
}
  
  // Check for Vertical Wins

  function verticalWinCheck(row,col){
   
    for(var i=0;i<4;i++)
      {
          var rowidx=row-i;
          if(colorMatchCheck(returnColor(rowidx,col), returnColor(rowidx+1,col) ,returnColor(rowidx+2,col), returnColor(rowidx+3,col)))
          {
             return true;
          }
      }

      return false;
  }
    
  // Check for Diagonal Wins
  function diagnolWinCheck(row,col){
    
    
    for(var i=0;i<4;i++)
    {
    rowidx=row+i
    colidx=col-i;
    if(colorMatchCheck(returnColor(rowidx,colidx), returnColor(rowidx-1,colidx+1) ,returnColor(rowidx-2,colidx+2), returnColor(rowidx-3,colidx+3)))
    {
       return true;
    }
}


 
    return false;


  }

var currentPlayer=1;
var currentName=player1;
var currentColor=player1Color;
var gameOn=false;


if(gameOn===true){
$('h3').text(player1," it is your turn, pick a column to drop in!");
}

$('.board button').on('click',function(){

    gameOn=true;

    var col=$(this).closest('td').index();

    var bottomAvail=checkBottom(col);
    
    changeColor(bottomAvail,col,currentColor);

        if(horizontalWinCheck(bottomAvail,col) || verticalWinCheck(bottomAvail,col) || diagnolWinCheck(bottomAvail,col)){
        $('h1').text(currentName+" You have won!")
        $('h3').fadeOut('slow');
        $('h2').fadeOut('slow');

        $('#photo').slideIn('fast')

    }

    currentPlayer=currentPlayer*-1;

    if(currentPlayer===1){
        currentName=player1;
        $('h3').text(currentName+" it is your turn");
        currentColor=player1Color
    }else{
        currentName=player2;
        $('h3').text(currentName+" it is your turn");
        currentColor=player2Color
    }

})
