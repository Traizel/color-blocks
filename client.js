$(document).ready(onReady) 

function onReady() {
$('#controller').on('click', '#red', function(){
    $('#container').append('<button class="redButton">Red</button>');
    let redCount = $('#red-count').text();
    Number(redCount);
    redCount++;
    $('#red-count').text(redCount);
})
$('#controller').on('click', '#green', function(){
    $('#container').append('<button class="greenButton">Green</button>');
    let greenCount = $('#green-count').text();
    Number(greenCount);
    greenCount++;
    $('#green-count').text(greenCount);
})
$('#controller').on('click', '#blue', function(){
    $('#container').append('<button class="blueButton">Blue</button>');
    let blueCount = $('#blue-count').text();
    Number(blueCount);
    blueCount++;
    $('#blue-count').text(blueCount);
})
$('#controller').on('click', '#yellow', function(){
    $('#container').append('<button class="yellowButton">Yellow</button>');
    let yellowCount = $('#yellow-count').text();
    Number(yellowCount);
    yellowCount++;
    $('#yellow-count').text(yellowCount);
})
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