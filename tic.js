
var c=0;
$(function(){
    
    var player=1;
    var table= $("table");
    var messages = $(".messages");
    var turn = $(".turn");
   
    
    $("td").click(function(){
        td=$(this);
        var state=getState(td);
        var i;
        if(!state){
            var pattern=definePatternForCurrentPlayer(player);
           
            //console.log(pattern);
            changeState(td,pattern);
            if(i=checkIfPlayerWon(table,pattern))
            {
                if(i==0 ||i==1)
                {
                messages.html("Player"+player+"has won");
                turn.html("");
                c=0;
                }
                else{
                    messages.html("It's a tie");
                    turn.html("");
                }
            }
            else{
                player=nxtPlayer(player);
                displayNextPlayer(turn,player);
            }

        }
        else{
            messages.html("Already checked");
        }
       

    });
    $(".reset").click(function(){
        player=1;
        messages.html("");
        reset(table);
    });
});

function getState(id){
    if(td.hasClass("cross")||td.hasClass("circle"))
    {
        return 1;
    }
    else{
        return 0;
    }
}

function displayNextPlayer(turn,player){
    turn.html("Player turn: "+player);
}

function nxtPlayer(player)
{
    if(player==1){
        return player=2;
    }
    else{
        return player=1;
    }
}

function changeState(td,pattern)
{
    return td.addClass(pattern);
}

function definePatternForCurrentPlayer(player)
{
    if(player==1)
    {
        return 'cross';
    }
    else
    {
        return 'circle';
    }
}

function checkIfPlayerWon(table, pattern) {
    console.log("Checking Winner");
    var won = 0;
    if(c==8)
    {
        won=2;
        c=0;
       return won;
    }
    console.log(c);
    c++;
    if(table.find('.item1').hasClass(pattern) && table.find('.item2').hasClass(pattern) && table.find('.item3').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
      won = 1;
    }
    
    
    return won;
  }
  function reset(table){
      table.find("td").each(function(){
        $(this).removeClass("circle").removeClass("cross")
      });
  }