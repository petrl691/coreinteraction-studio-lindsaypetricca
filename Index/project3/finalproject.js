// var username;

// $('.submit-button').click(function (e) {
//   username = $('.username-input').val();

//   $('.username-form').addClass('is-hidden');
//   $('.color-input').removeClass('is-hidden');
// });

var messageContainer = document.querySelectorAll('.messages')[0];
var addMessage = document.querySelectorAll('.circle')[0];
var username = Math.random().toString(16).split('.').pop()
addMessage.addEventListener('click', function () {
  var value = Math.floor(Math.random() * 13);

  Chat.sendMessage({
    sender: username,
    type: 'raw',
    value: value,
  });
});

var poemone = [

"I found a dimpled spider, fat and white,",
"On a white heal-all, holding up a moth",
"Like a white piece of rigid satin cloth--",
"Assorted characters of death and blight",
"Mixed ready to begin the morning right,",
"Like the ingredients of a witches’ broth--",
"A snow-drop spider, a flower like a froth,",
"And dead wings carried like a paper kite.",

"What had that flower to do with being white,",
"The wayside blue and innocent heal-all?",
"What brought the kindred spider to that height,",
"Then steered the white moth thither in the night?",
"What but design of darkness to appall?--",
"If design govern in a thing so small.",

];

var poemtwo = [

"I pour a coating of salt on the table", 
"and make a circle in it with my finger." ,
"This is the cycle of life", 
"I say to no one." ,
"This is the wheel of fortune," ,
"the Arctic Circle.", 
"This is the ring of Kerry" ,
"and the white rose of Tralee", 
"I say to the ghosts of my family,", 
"the dead fathers,", 
"the aunt who drowned,", 
"my unborn brothers and sisters,", 
"my unborn children.", 
"This is the sun with its glittering spokes", 
"and the bitter moon.", 
"This is the absolute circle of geometry", 
"I say to the crack in the wall,", 
"to the birds who cross the window." ,
"This is the wheel I just invented", 
"to roll through the rest of my life", 
"I say",
"touching my finger to my tongue.", 

];

var poemthree = [


'Others taunt me with having knelt at well-curbs',
'Always wrong to the light, so never seeing',
'Deeper down in the well than where the water',
'Gives me back in a shining surface picture',
'Me myself in the summer heaven godlike',
'Looking out of a wreath of fern and cloud puffs.',
'Once, when trying with chin against a well-curb,',
'I discerned, as I thought, beyond the picture,',
'Through the picture, a something white, uncertain,',
'Something more of the depths—and then I lost it.',
'Water came to rebuke the too clear water.',
'One drop fell from a fern, and lo, a ripple',
'Shook whatever it was lay there at bottom,',
'Blurred it, blotted it out. What was that whiteness?',
'Truth? A pebble of quartz? For once, then, something.',


]

var poemfour = [


'Others taunt me with having knelt at well-curbs',
'Always wrong to the light, so never seeing',
'Deeper down in the well than where the water',
'Gives me back in a shining surface picture',
'Me myself in the summer heaven godlike',
'Looking out of a wreath of fern and cloud puffs.',
'Once, when trying with chin against a well-curb,',
'I discerned, as I thought, beyond the picture,',
'Through the picture, a something white, uncertain,',
'Something more of the depths—and then I lost it.',
'Water came to rebuke the too clear water.',
'One drop fell from a fern, and lo, a ripple',
'Shook whatever it was lay there at bottom,',
'Blurred it, blotted it out. What was that whiteness?',
'Truth? A pebble of quartz? For once, then, something.',


]

var poemfive = [


'Others taunt me with having knelt at well-curbs',
'Always wrong to the light, so never seeing',
'Deeper down in the well than where the water',
'Gives me back in a shining surface picture',
'Me myself in the summer heaven godlike',
'Looking out of a wreath of fern and cloud puffs.',
'Once, when trying with chin against a well-curb,',
'I discerned, as I thought, beyond the picture,',
'Through the picture, a something white, uncertain,',
'Something more of the depths—and then I lost it.',
'Water came to rebuke the too clear water.',
'One drop fell from a fern, and lo, a ripple',
'Shook whatever it was lay there at bottom,',
'Blurred it, blotted it out. What was that whiteness?',
'Truth? A pebble of quartz? For once, then, something.',


]

var poemsix = [


'Others taunt me with having knelt at well-curbs',
'Always wrong to the light, so never seeing',
'Deeper down in the well than where the water',
'Gives me back in a shining surface picture',
'Me myself in the summer heaven godlike',
'Looking out of a wreath of fern and cloud puffs.',
'Once, when trying with chin against a well-curb,',
'I discerned, as I thought, beyond the picture,',
'Through the picture, a something white, uncertain,',
'Something more of the depths—and then I lost it.',
'Water came to rebuke the too clear water.',
'One drop fell from a fern, and lo, a ripple',
'Shook whatever it was lay there at bottom,',
'Blurred it, blotted it out. What was that whiteness?',
'Truth? A pebble of quartz? For once, then, something.',


]

var poemseven = [


'Others taunt me with having knelt at well-curbs',
'Always wrong to the light, so never seeing',
'Deeper down in the well than where the water',
'Gives me back in a shining surface picture',
'Me myself in the summer heaven godlike',
'Looking out of a wreath of fern and cloud puffs.',
'Once, when trying with chin against a well-curb,',
'I discerned, as I thought, beyond the picture,',
'Through the picture, a something white, uncertain,',
'Something more of the depths—and then I lost it.',
'Water came to rebuke the too clear water.',
'One drop fell from a fern, and lo, a ripple',
'Shook whatever it was lay there at bottom,',
'Blurred it, blotted it out. What was that whiteness?',
'Truth? A pebble of quartz? For once, then, something.',


]

var poemeight = [


'Others taunt me with having knelt at well-curbs',
'Always wrong to the light, so never seeing',
'Deeper down in the well than where the water',
'Gives me back in a shining surface picture',
'Me myself in the summer heaven godlike',
'Looking out of a wreath of fern and cloud puffs.',
'Once, when trying with chin against a well-curb,',
'I discerned, as I thought, beyond the picture,',
'Through the picture, a something white, uncertain,',
'Something more of the depths—and then I lost it.',
'Water came to rebuke the too clear water.',
'One drop fell from a fern, and lo, a ripple',
'Shook whatever it was lay there at bottom,',
'Blurred it, blotted it out. What was that whiteness?',
'Truth? A pebble of quartz? For once, then, something.',


]

var usercolors = {}

var possiblecolors=[
  "#006ef4",
  "#ce6ef4",
  "#5fd65e",
  "red",
  "blue",
  "yellow",
  "purple",
  "pink",
  "white",
  "Lightblue",
  "salmon",

]

var size={}


  Chat.onMessage(function (data) {

    var currentcolor=usercolors[data.sender]
    if (!currentcolor) {
      var index=Math.floor(Math.random()*possiblecolors.length);

      var element=possiblecolors[index];
      usercolors[data.sender]=element;

      currentcolor=element;

      $( "circle" ).click(function() {
  $( "circlesmall" ).animate({
    top: "50",
  }, 5000, function() {
    // Animation complete.
  });
});

    
    }

    console.log(data.value);

    if (data.value == 0) {
      var index=Math.floor(Math.random()*poemone.length);
      var element=poemone[index];
      $(".one").html(element);
      $(".one").show("fast");
      $(".one").css("color", currentcolor);
    }

    if (data.value == 1) {
      var index=Math.floor(Math.random()*poemtwo.length);
      var element=poemtwo[index];
      $(".two").html(element);
      $(".two").show("fast");
      $(".two").css("color", currentcolor);
    }

     if (data.value == 2) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".three").html(element);
      $(".three").show("fast");
      $(".three").css("color", currentcolor);
    }

    if (data.value == 3) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".four").html(element);
      $(".four").show("fast");
      $(".four").css("color", currentcolor);
    }

    if (data.value == 4) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".five").html(element);
      $(".five").show("fast");
      $(".five").css("color", currentcolor);
    }

    if (data.value == 5) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".six").html(element);
      $(".six").show("fast");
      $(".six").css("color", currentcolor);
    }

    if (data.value == 6) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".seven").html(element);
      $(".seven").show("fast");
      $(".seven").css("color", currentcolor);
    }

    if (data.value == 7) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".eight").html(element);
      $(".eight").show("fast");
      $(".eight").css("color", currentcolor);
    }

     if (data.value == 8) {
      var index=Math.floor(Math.random()*poemthree.length);
      var element=poemthree[index];
      $(".nine").html(element);
      $(".nine").show("fast");
      $(".nine").css("color", currentcolor);
    }

  });



Chat.onUserCountChange(function (newCount) {
  var userCountElement = document.querySelector('.user-count');
});





















