$(document).ready(onReady) 

function onReady() { // Add blocks
$('#controller').on('click', '#red', function(){
    let blockAmount = $('#amount').val();
    for (i = 0; i < blockAmount; i++){
    $('#container').append('<button class="redButton">Red</button>');
    let redCount = $('#red-count').text();
    Number(redCount);
    redCount++;
    $('#red-count').text(redCount);
    }
    $('#amount').val('');
})
$('#controller').on('click', '#green', function(){
    let blockAmount = $('#amount').val();
    for (i = 0; i < blockAmount; i++){
    $('#container').append('<button class="greenButton">Green</button>');
    let greenCount = $('#green-count').text();
    Number(greenCount);
    greenCount++;
    $('#green-count').text(greenCount);
    }
    $('#amount').val('');
})
$('#controller').on('click', '#blue', function(){
    let blockAmount = $('#amount').val();
    for (i = 0; i < blockAmount; i++){
    $('#container').append('<button class="blueButton">Blue</button>');
    let blueCount = $('#blue-count').text();
    Number(blueCount);
    blueCount++;
    $('#blue-count').text(blueCount);
    }
    $('#amount').val('');
})
$('#controller').on('click', '#yellow', function(){
    let blockAmount = $('#amount').val();
    for (i = 0; i < blockAmount; i++){
    $('#container').append('<button class="yellowButton">Yellow</button>');
    let yellowCount = $('#yellow-count').text();
    Number(yellowCount);
    yellowCount++;
    $('#yellow-count').text(yellowCount);
    }
    $('#amount').val('');
})
// Delete blocks
$('#container').on('click', '.redButton', function(){
    $(this).remove();
    let redCount = $('#red-count').text();
    Number(redCount);
    redCount--;
    $('#red-count').text(redCount);
})
$('#container').on('click', '.blueButton', function(){
    $(this).remove();
    let blueCount = $('#blue-count').text();
    Number(blueCount);
    blueCount--;
    $('#blue-count').text(blueCount);
})
$('#container').on('click', '.greenButton', function(){
    $(this).remove();
    let greenCount = $('#green-count').text();
    Number(greenCount);
    greenCount--;
    $('#green-count').text(greenCount);
})
$('#container').on('click', '.yellowButton', function(){
    $(this).remove();
    let yellowCount = $('#yellow-count').text();
    Number(yellowCount);
    yellowCount--;
    $('#yellow-count').text(yellowCount);
})
}   