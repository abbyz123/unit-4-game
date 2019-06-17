// target number
let targetNum = 0;
let winScore = 0;
let loseScore = 0;
let totalCollectScore = 0;

// image location
imageLoc = 'assets/images/';

// gem number table
gemNumTable = Object();

$(function () {
    // change game header css styling
    $('#gameHeader').css({
        'background-color': 'orange',
        'color': 'white',
        'padding-top': '10px',
        'padding-bottom': '10px'
    });

    // change game rule description css styling
    $('#gameRule').css({
        'background-color': 'rgb(248, 230, 209)',
        'color': 'green',
        'margin-top': '20px',
        'margin-bottom': '20px',
        'font-weight': 'bold'
    })

    // generate a random number between 40 to 100
    targetNum = Math.floor(Math.random() * 60 + 40);

    // random number background color 
    $('#randomNumber').css({
        'background-color': 'rgb(114, 198, 141)',
        'font-size': '40px',
        'margin-right': '20px'
    }).text(targetNum);

    // score background color
    $("#scoreTable").css({
        'background-color': 'rgb(122, 250, 251)',
        'padding-left': '20px'
    });

    // initialize win and lose score
    $('#win').text('Wins: ' + winScore);
    $('#lose').text('Losses: ' + loseScore);

    // gem zone css
    $("#gemZone").css({
        'margin-top': '20px'
    });

    // gem image
    $('#gemZone>*').each(function () {
        let id = this.id;
        $(this).append("<img src=" + '\"' + imageLoc + id + '.jpg\"' +
            " width=" + '\"' + "100%" + '\"' +
            " height=" + '\"' + "100%" + '\"' +
            " alt=" + '\"' + id + '\"' + ">");
        // assign each gem a random number (1~10)
        let gemScore = Math.floor(Math.random() * 9 + 1);

        // bind the random number of the gem id
        gemNumTable[id] = gemScore;
    });

    // score header and panel
    $('#scoreHeader,#scorePanel').css({
        'background-color': 'rgb(75, 159, 149)',
        'color': 'white',
        'margin-top': '20px',
        'margin-bottom': '20px'
    });

    // adjust score panel font size
    $('#scorePanel').css({
        'font-size': '40px'
    })

    // score panel
    $('#scorePanel').text(totalCollectScore);

    // event handler on click gem image
    $('#gemZone>*').each(function () {
        $(this).on('click', function (e) {
            totalCollectScore += gemNumTable[this.id];
            $('#scorePanel').text(totalCollectScore);

            // event handler when the score is updated
            if (totalCollectScore < targetNum) {
                // game continue
            } else {
                if (totalCollectScore === targetNum) {
                    // show win status
                    $('#gamestatus').text('You win!');

                    // win + 1
                    winScore += 1
                    $('#win').text('Wins: ' + winScore);
                } else {
                    console.log('lose')
                    // show lose status
                    $('#gamestatus').text('You lose!');

                    // lose + 1
                    loseScore += 1
                    $('#lose').text('Losses: ' + loseScore);
                }

                // no matter win or lose, renew the target number, gem score and total score
                targetNum = Math.floor(Math.random() * 60 + 40);                // renew target number
                $('#randomNumber').text(targetNum);

                $('#gemZone>*').each(function () {                              // renew gem score
                    let id = this.id;

                    // assign each gem a random number (1~10)
                    let gemScore = Math.floor(Math.random() * 9 + 1);

                    // bind the random number of the gem id
                    gemNumTable[id] = gemScore;
                });

                totalCollectScore = 0;                                          // renew total score (reset to zero)
                $('#scorePanel').text(totalCollectScore);
            }
        })
    });
});