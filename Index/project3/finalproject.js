// var username;

// $('.submit-button').click(function (e) {
//   username = $('.username-input').val();

//   $('.username-form').addClass('is-hidden');
//   $('.color-input').removeClass('is-hidden');
// });


var messageContainer = document.querySelectorAll('.messages')[0];
var addMessage = document.querySelectorAll('#circle')[0];
var username = Math.random().toString(16).split('.').pop()
addMessage.addEventListener('click', function () {
  var value = Math.floor(Math.random() * 13);

  Chat.sendMessage({
    sender: 'Lindsay',
    type: 'raw',
    value: value,
  });
});


var poemone = [

"I found a dimpled spider, fat and white,",
"on a white heal-all, holding up a moth",
"like a white piece of rigid satin cloth--",
"assorted characters of death and blight",
"mixed ready to begin the morning right,",
"like the ingredients of a witches’ broth--",
"a snow-drop spider, a flower like a froth,",
"and dead wings carried like a paper kite.",

"what had that flower to do with being white,",
"the wayside blue and innocent heal-all?",
"what brought the kindred spider to that height,",
"then steered the white moth thither in the night?",
"what but design of darkness to appall?--",
"if design govern in a thing so small.",

]

var poemtwo = [

"I pour a coating of salt on the table", 
"and make a circle in it with my finger" ,
"this is the cycle of life", 
"I say to no one" ,
"this is the wheel of fortune," ,
"the Arctic Circle.", 
"this is the ring of Kerry" ,
"and the white rose of Tralee", 
"I say to the ghosts of my family,", 
"the dead fathers,", 
"the aunt who drowned", 
"my unborn brothers and sisters,", 
"my unborn children.", 
"this is the sun with its glittering spokes", 
"and the bitter moon.", 
"this is the absolute circle of geometry", 
"I say to the crack in the wall,", 
"to the birds who cross the window." ,
"this is the wheel I just invented", 
"to roll through the rest of my life", 
"I say",
"touching my finger to my tongue.", 

];

var poemthree = [


'others taunt me with having knelt at well-curbs',
'always wrong to the light, so never seeing',
'deeper down in the well than where the water',
'gives me back in a shining surface picture',
'me myself in the summer heaven godlike',
'looking out of a wreath of fern and cloud puffs',
'once, when trying with chin against a well-curb',
'I discerned, as I thought, beyond the picture',
'through the picture, a something white, uncertain',
'something more of the depths—and then I lost it',
'water came to rebuke the too clear water',
'one drop fell from a fern, and lo, a ripple',
'shook whatever it was lay there at bottom',
'blurred it, blotted it out. What was that whiteness',
'truth? A pebble of quartz? For once, then, something',


]

var poemfour = [


'whose woods these are I think I know',
'his house is in the village, though;',
'he will not see me stopping here',
'to watch his woods fill up with snow',
'my little horse must think it queer',
'to stop without a farmhouse near',
'between the woods and frozen lake',
'the darkest evening of the year.',
'he gives his harness bells a shake',
'to ask if there is some mistake.',
'the only other sounds the sweep',
'of easy wind and downy flake.',
'the woods are lovely, dark and deep,',
'but I have promises to keep,',
'and miles to go before I sleep,',
'and miles to go before I sleep.',


]

var poemfive = [

'she walks in beauty, like the night', 
'of cloudless climes and starry skies', 
'and all that’s best of dark and bright' ,
'meet in her aspect and her eyes', 
'thus mellowed to that tender light', 
'which heaven to gaudy day denies',

'one shade the more, one ray the less', 
'had half impaired the nameless grace', 
'which waves in every raven tress' ,
'or softly lightens o’er her face', 
'where thoughts serenely sweet express', 
'how pure, how dear their dwelling-place',

'and on that cheek, and o’er that brow', 
'so soft, so calm, yet eloquent',
'the smiles that win, the tints that glow', 
'but tell of days in goodness spent', 
'a mind at peace with all below', 
'a heart whose love is innocent',



]

var poemsix = [
'love is more thicker than forget',
'more thinner than recall',
'more seldom than a wave is wet',
'more frequent than to fail',

'it is most mad and moonly',
'and less it shall unbe',
'than all the sea which only',
'is deeper than the sea',

'love is less always than to win',
'less never than alive',
'less bigger than the least begin',
'less littler than forgive',

'it is most sane and sunly',
'and more it cannot die',
'than all the sky which only',
'is higher than the sky',



]

var poemseven = [

'I loved you first: but afterwards your love',
'Outsoaring mine, sang such a loftier song', 
'As drowned the friendly cooings of my dove', 
'Which owes the other most? my love was long',
'And yours one moment seemed to wax more strong',
'I loved and guessed at you, you construed me', 
'And loved me for what might or might not be', 
'Nay, weights and measures do us both a wrong', 
'For verily love knows not mine or thine',
'With separate I and thou free love has done', 
'For one is both and both are one in love',
'Rich love knows nought of thine that is not mine', 
'Both have the strength and both the length thereof',
'Both of us, of the love which makes us one',



]

var poemeight = [

'through your lens the sequoia swallowed me',   
'like a dryad the camera flashed forgot' ,
'I, on the other hand, must practice my absent', 
'mindedness, memory being awkward as a touch',   
'that goes unloved Lately your eyes have shut',
'down to a shade more durable than skins. I know you',   
'love distance, how it smooths. You choose an aerial view' ,  
'the city angled to abstraction, while I go for the close',   
'exposures: poorly-mounted countenances along Broadway',   
'the pigweed cracking each hardscrabble backlot' , 
'It’s a matter of perspective: yours is to love me' ,  
'from a block away & mine is to praise the', 
'graininess that weaves expressively: your face',




]

var poemnine = [

'somewhere or other there must surely be', 
'the face not seen, the voice not heard',
'the heart that not yet—never yet—ah me', 
'made answer to my word', 

'somewhere or other, may be near or far', 
'past land and sea, clean out of sight', 
'beyond the wandering moon, beyond the star', 
'that tracks her night by night', 

'somewhere or other, may be far or near', 
'with just a wall, a hedge, between', 
'with just the last leaves of the dying year', 
'fallen on a turf grown green', 



]

var poemten = [
'you have changed me already. I am a fireball',
'yhat is hurtling towards the sky to where you are',
'you can choose not to look up but I am a giant orange ball',
'that is throwing sparks upon your face',
'oh look at them shake',
'upon you like a great planet that has been murdered by change',
'o too this is so dramatic this shaking',
'of my great planet that is bigger than you thought it would be',
'so you ran and hid',
'under a large tree. She was graceful, I think',
'that tree although soon she will wither',
'into ten black snakes upon your throat',
'and when she does I will be wandering as I always am',
'a graceful lady that is part museum',
'of the voices of the universe everyone else forgets',
'I will hold your voice in a little box',
'and when you come upon me I won’t look back at you',
'you will feel a hand upon your heart while I place your voice back',
'into the heart from where it came from',
'and I will not cry also',
'although you will expect me to',
'I was wiser too than you had expected',
'for I knew all along you were mine,', 





]

var poemeleven = [

'natures first green is gold,',
'her hardest hue to hold',
'her early leaves a flower', 
'but only so an hour',
'then leaf subsides to leaf,',
'so Eden sank to grief',
'so dawn goes down to day',
'nothing gold can stay', 



]

var poemtwelve = [

'you did not come',
'and marching Time drew on, and wore me numb',
'yet less for loss of your dear presence there ',
'than that I thus found lacking in your make ',
'that high compassion which can overbear', 
'reluctance for pure lovingkindness’ sake' ,
'grieved I, when, as the hope-hour stroked its sum',
'you did not come',

'you love not me',
'and love alone can lend you loyalty', 
'I know and knew it. But, unto the store',
'of human deeds divine in all but name',
'was it not worth a little hour or more',
'to add yet this: Once you, a woman, came',
'to soothe a time-torn man; even though it be ',
'you love not me ',



]

var usercolors = {}

var possiblecolors=[
  "#B3C6FF",
  "#C6B3FF",
  "#ECB3FF",
  "#FFB3EC",
  "#B3ECFF",
  "#386AFF",
  "#FFB3C6",
  "#B3FFEC",
  "#FFCD38",
  "#FFDD75",
  "#FFC6B3",
  "#B3FFC6",
  "#C6FFB3",
  "#ECFFB3"

]



  Chat.onMessage(function (data) {

    var currentcolor=usercolors[data.sender]
    if (!currentcolor) {
      var index=Math.floor(Math.random()*possiblecolors.length);


      var element=possiblecolors[index];
      usercolors[data.sender]=element;

      currentcolor=element;

    
    }

    console.log(data.value);

    if (data.value == 0) {
      var index=Math.floor(Math.random()*poemone.length);
      var element=poemone[index];
      $(".one").html(element);
      $(".one").show("slow");
      $(".one").css("color", currentcolor);
    }

    if (data.value == 1) {
      var index=Math.floor(Math.random()*poemtwo.length);
      var element=poemtwo[index];
      $(".two").html(element);
      $(".two").show("slow");
      $(".two").css("color", currentcolor);
    }

     if (data.value == 2) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".three").html(element);
      $(".three").show("slow");
      $(".three").css("color", currentcolor);
    }

    if (data.value == 3) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".four").html(element);
      $(".four").show("slow");
      $(".four").css("color", currentcolor);
    }

    if (data.value == 4) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".five").html(element);
      $(".five").show("slow");
      $(".five").css("color", currentcolor);
    }

    if (data.value == 5) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".six").html(element);
      $(".six").show("slow");
      $(".six").css("color", currentcolor);
    }

    if (data.value == 6) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".seven").html(element);
      $(".seven").show("slow");
      $(".seven").css("color", currentcolor);
    }

    if (data.value == 7) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".eight").html(element);
      $(".eight").show("slow");
      $(".eight").css("color", currentcolor);
    }

     if (data.value == 8) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".nine").html(element);
      $(".nine").show("slow");
      $(".nine").css("color", currentcolor);
    }

  if (data.value == 8) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".ten").html(element);
      $(".ten").show("slow");
      $(".ten").css("color", currentcolor);
    }

  if (data.value == 8) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".eleven").html(element);
      $(".eleven").show("slow");
      $(".eleven").css("color", currentcolor);
    }

    if (data.value == 8) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".twelve").html(element);
      $(".twelve").show("slow");
      $(".twelve").css("color", currentcolor);
    }

  });



Chat.onUserCountChange(function (newCount) {
  var userCountElement = document.querySelector('.user-count');
});

$( "#circle" ).draggable();

  // $('#circle').click (function () {
  //       $('#square').show();
  //   });

$("#square").draggable();

  // $(function() {
  //     $("#circle").click(function() {
  //         div = document.createElement('#square');
  //         $(div).addClass("#square").html("new inner div");
  //         $(".append").append(div);
  //       });
  //   });

// $("#bar").mouseover(function(){
//     $("#bar").stop().animate({
//         "left":"-20px",
//         "left":"50px"
//     });
// });
// $("#bar").mouseout(function(){
//     $("#bar").stop().animate({
//         "left":"0px",
//         "left":"0px"
//     });
// });

// $('#bar').hover(function () {
//   $(".poems").show();


// });


$(".line").hover(
    function(){
        $(".poem").delay(400).fadeIn();
    },
    function(){
        $(".poem").fadeOut(100);
    }
);



