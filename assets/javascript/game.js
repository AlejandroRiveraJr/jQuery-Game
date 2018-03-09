var random_results,
    lost = 0,
    win = 0,
    previous = 0;

var resetAndStart = function (){

    $(".crystals").empty();

random_results = Math.floor(Math.random() * 101) + 19;

$("#results").html('Random Results: ' + random_results);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.html(random);
        
    $(".crystals").append(crystal);
    }
}

resetAndStart();

var reset = function (){

}

$(document).on('click', ".crystal", function(){

    var num = parseInt($(this).attr("data-random"));
    previous += num;
    console.log(previous);
    if(previous > random_results){
        lost--;
        $("#lost").html(lost);
        resetAndStart();
    }
    else if(previous === random_results){
        win++;
        $("#win").html(win);
        resetAndStart();
    }
}); 