var random_results,
    lost = 0,
    win = 0,
    previous = 0;

var resetAndStart = function (){

    var images = [
        "https://vignette.wikia.nocookie.net/joke-battles/images/f/ff/Dragon_Ball_%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90.png/revision/latest?cb=20151226090614",
        "https://upload.wikimedia.org/wikipedia/bar/thumb/2/2c/Dragonball_%284-Sterne%29.svg/2000px-Dragonball_%284-Sterne%29.svg.png",
        "http://karlmac.com/wp-content/uploads/2011/08/7-star-dragonball.png",
        "http://icons.iconarchive.com/icons/musett/dragon-ballz/256/Dragon-Ball-icon.png"];

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

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });
        
    $(".crystals").append(crystal);
    }
    $("#previous").html("Score:" + previous);
}

resetAndStart();

$(document).on('click', ".crystal", function(){

    var num = parseInt($(this).attr("data-random"));
    previous += num;
    $("#previous").html("Score:" + previous);
    console.log(previous);
    if(previous > random_results){
        lost++;
        $("#lost").html("You Lose:" + lost);
        previous = 0;
        resetAndStart();
    }
    else if(previous === random_results){
        win++;
        $("#win").html("You Win:" + win);
        previous = 0;
        resetAndStart();
    }
}); 