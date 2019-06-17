// target number
let targetNum = 0;
let winScore = 0;
let loseScore = 0;
let totalCollectScore = 0;

// image location
imageLoc = 'assets/images/';

// gem number table
gemNumTable = Object();

$(function() {
    // change game header css styling
    $('#gameHeader').css({
        'background-color' : 'orange',
        'color' : 'white',
        'padding-top' : '10px',
        'padding-bottom' : '10px'
    });

    // change game rule description css styling
    $('#gameRule').css({
        'background-color' : 'rgb(248, 230, 209)',
        'color' : 'green',
        'margin-top' : '20px',
        'margin-bottom' : '20px',
        'font-weight' : 'bold'
    })

    // generate a random number between 40 to 100
    targetNum = Math.floor(Math.random() * 60 + 40);

    // random number background color 
    $('#randomNumber').css({
        'background-color' : 'rgb(114, 198, 141)',
        'font-size' : '40px',
        'margin-right' : '20px'
    }).text(targetNum)

    // score background color
    $("#scoreTable").css({
        'background-color' : 'rgb(122, 250, 251)',
        'padding-left' : '20px'
    })

    // initialize win and lose score
    $('#win').text('Wins: ' + winScore);
    $('#lose').text('Losses: ' + loseScore);

    // gem zone css
    $("#gemZone").css({
        'margin-top' : '20px'
    })

    // gem image
    $('#gemZone>*').each(function() {
        let id = this.id;
        $(this).append("<img src=" + '\"' + imageLoc + id + '.jpg\"' + 
                         " width=" + '\"' + "100%" + '\"' + 
                         " height=" + '\"' + "100%" + '\"' + 
                         " alt=" + '\"' + id + '\"' + ">");
    });

    // score header and panel
    $('#scoreHeader,#scorePanel').css({
        'background-color' : 'rgb(75, 159, 149)',
        'color' : 'white',
        'margin-top' : '20px',
        'margin-bottom' : '20px'
    });

    // adjust score panel font size
    $('#scorePanel').css({
        'font-size' : '40px'
    })

    // score panel
    $('#scorePanel').text(totalCollectScore);
});