$(function () {

    // Initialize rivescript
    var bot = new RiveScript();

    // Load rivescript file and check for errors
    bot.loadFile("brain.rive").then(brainReady).catch(brainError);

    // Display on the console if bot is ready
    function brainReady() {
        console.log("The supreme chat intelligence is ready to talk");
        bot.sortReplies();
        var num = Math.floor((Math.random() * 100) + 1);
        console.log(num);
        var reply = bot.reply("local-user", "set " + num);
        defaultDino();
    }

    // Display on console if bot has errors
    function brainError() {
        console.log("The supreme chat intelligence has encountered an error");
    }

    var userInput;
    var replyBot;
    var currentBot = "anabot";

    //Respuestas personalizadas
    var keywordObrasCard = "<div class='row'> <div class='col offset-m1 m11 s11'><a class='purple lighten-3 btn keywordButton'>Que obras hay</a><a class='purple lighten-3 btn keywordButton'>Button</a><a class='purple lighten-3 btn keywordButton'>Comprar tickets</a><a class='purple lighten-3 btn keywordButton'>Button</a><a class='purple lighten-3 btn keywordButton'>Parque Lezama</a><a class='purple lighten-3 btn keywordButton'>Proyectos</a></div></div>'";
    function defaultSettings() {
        var creature;
        if (currentBot == "anabot") {
            creature = "anabotIddle";
        } else if (currentBot == "octoLumino") {
            creature = "octoLuminoPunos";
        } else if (currentBot == "octoElectrico") {
            creature = "octoElectricoPunos";
        }
        var dinoCard = '<img src="images/' + creature + '.gif" class="card-image gifStyles" alt="...">';
        $("#dinoCard").html("");
        $("#dinoCard").append(dinoCard);
    }

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var inputName = $("#ca").val().trim();
        userInput = inputName;
        $("#ca").val("");
        // Send what the user said to the bot
        var reply = bot.reply("local-user", userInput);

        // Use the .then function to access the value inside the promise
        // If u dont use .then, reply will equal a promise object, instead of the bot's actual response
        reply.then(function (result) {
            console.log(result);
            replyBot = result;
            appendUserInput();
        });
    });

    // $("#feed").click(function () {
    //     event.preventDefault();
    //     var haveFood;
    //     switch (currentBot) {
    //         case "octobot":
    //             haveFood = "+1 Garlic bread ball"
    //             break;
    //         case "dinobot":
    //             haveFood = "+1 Bacon cheese-steak burger"
    //             break;
    //         case "sharkbot":
    //             haveFood = "1+ Samurai sushi roll"
    //             break;
    //         case "sharkMad":
    //             haveFood = "1+ OG sushi roll"
    //             break;
    //         case "sharkAngry":
    //             haveFood = "1+ Big Boss sushi roll"
    //             break;
    //          case "octoLumino":
    //             haveFood = "1+ Garlic Foam-Bun"
    //             break;
    //         case "octoElectrico":
    //             haveFood = "1+ Fried yuca ball"
    //             break;
    //         case "dinoRojo":
    //             haveFood = "1+ Triple-whooping filet mignon burger"
    //             break;
    //         case "dinoFuego":
    //             haveFood = "1+ Wagyu beef burger"
    //             break;

    //     }

    //     userInput = haveFood;
    //     var command = "feed " + currentBot;
    //     var reply = bot.reply("local-user", command);

    //     var creature;
    //     if (currentBot == "octobot") {
    //         creature = "octoComiendo";
    //     } else if (currentBot == "octoLumino") {
    //         creature = "octoLuminoComiendo";
    //     } else if (currentBot == "octoElectrico") {
    //         creature = "octoElectricoComiendo";
    //     } else if (currentBot == "dinobot") {
    //         creature = "comiendo";
    //     } else if (currentBot == "dinoRojo") {
    //         creature = "dinoRojoComiendo";
    //     } else if (currentBot == "dinoFuego") {
    //         creature = "dinoFuegoComiendo";
    //     } else if (currentBot == "sharkbot") {
    //         creature = "sharkEat";
    //     } else if (currentBot == "sharkMad") {
    //         creature = "sharkMadEat";
    //     } else if (currentBot == "sharkAngry") {
    //         creature = "sharkAngryEat";
    //     }
    //     var dinoCard = '<img src="art/' + creature + '.gif" class="card-img-top" alt="...">';
    //     $("#dinoCard").html("");
    //     $("#dinoCard").append(dinoCard);

    //     reply.then(function (result) {
    //         console.log(result);
    //         replyBot = result;

    //         setTimeout(appendUserInput, 1250);

    //     });

    // });

    // $("#evolve").click(function () {
    //     event.preventDefault();

    //     var creature;
    //     if (currentBot == "octobot") {
    //         creature = "octoLuminoComiendo";
    //         currentBot = "octoLumino";
    //         setTimeout(initShark, 50);
    //     } else if (currentBot == "octoLumino") {
    //         creature = "octoLuminoComiendo";
    //         currentBot = "octoElectrico";
    //         setTimeout(initShark, 50);
    //     } else if (currentBot == "dinobot") {
    //         creature = "comiendo";
    //         currentBot = "dinoRojo";
    //         setTimeout(initShark, 50);
    //     } else if (currentBot == "dinoRojo") {
    //         creature = "dinoRojoComiendo";
    //         currentBot = "dinoFuego";
    //         setTimeout(initShark, 50);
    //     } else if (currentBot == "dinoFuego") {
    //         creature = "dinoFuegoComiendo";
    //         currentBot = "dinoRojo";
    //     } else if (currentBot == "sharkbot") {
    //         creature = "sharkMadSwim";
    //         currentBot = "sharkMad";
    //         setTimeout(initShark, 50);
    //     } else if (currentBot == "sharkMad") {
    //         creature = "sharkMadEat";
    //         currentBot = "sharkAngry";
    //         setTimeout(initShark, 100);
    //     } else if (currentBot == "sharkAngry") {
    //         creature = "sharkAngryEat";
    //     }


    //     var dinoCard = '<img src="art/' + creature + '.gif" class="card-image" alt="...">';
    //     $("#dinoCard").html("");
    //     $("#dinoCard").append(dinoCard);
    //     setTimeout(defaultSettings, 1250);
    // });

    // function initShark() {
    //     var command = currentBot + " init";
    //     var reply = bot.reply("local-user", command);
    //     console.log(command);
    // }

    // $("#pet").click(function () {
    //     event.preventDefault();
    //     var petDino = "'You play with your pet'";
    //     userInput = petDino;
    //     var command = "pet " + currentBot
    //     var reply = bot.reply("local-user", command);

    //     reply.then(function (result) {
    //         console.log(result);
    //         replyBot = result;
    //         appendUserInput();
    //     });

    // });

    // $("#octobot").click(function () {
    //     $("#dinobot").attr('class', 'nav-link');
    //     $("#sharkbot").attr('class', 'nav-link');
    //     $("#octobot").addClass('bg-warning text-white');
    //     var command = "octobot init";
    //     var reply = bot.reply("local-user", command);
    //     reply.then(function (result) {
    //         console.log(command);
    //     });

    //     currentBot = "octobot";
    //     event.preventDefault();
    //     var dinoCard = '<img src="art/octoPunos.gif" class="card-img-top" alt="...">';
    //     $("#dinoCard").html("");
    //     $("#dinoCard").append(dinoCard);
    //     eraseChatBox();
    // });


    // $("#dinobot").click(function () {
    //     $("#octobot").attr('class', 'nav-link');
    //     $("#sharkbot").attr('class', 'nav-link');
    //     $("#dinobot").addClass('bg-primary text-white');

    //     var command = "dinobot init";
    //     var reply = bot.reply("local-user", command);
    //     reply.then(function (result) {
    //         console.log(command);
    //     });

    //     currentBot = "dinobot";
    //     eraseChatBox();
    // });

    // $("#sharkbot").click(function () {
    //     $("#dinobot").attr('class', 'nav-link');
    //     $("#octobot").attr('class', 'nav-link');
    //     $("#sharkbot").addClass('bg-success text-white');

    //     var command = "sharkbot init";
    //     var reply = bot.reply("local-user", command);
    //     reply.then(function (result) {
    //         console.log(command);
    //     });

    //     currentBot = "sharkbot";
    //     eraseChatBox();
    // });

    // function eraseChatBox() {
    //     $("#chatBox").html("");
    //     defaultSettings();
    // }

    function defaultDino() {
        currentBot = "anabot";
        defaultSettings();

        var command = "anabot init";
        var reply = bot.reply("local-user", command);
    }



    function appendUserInput() {
        var uiCard = '<div class="uiCard" role="alert">' + userInput + '</div>';
        // var dinoCard = '<img src="art/buenaGente.gif" class="card-img-top" alt="...">';
        $("#chatBox").append(uiCard);
        // $("#dinoCard").html("");
        // $("#dinoCard").append(dinoCard);
        setTimeout(appendBotRes, 1500);
        var creature;
        if (currentBot == "anabot") {
            creature = "anaBotHablando";
        } else if (currentBot == "octoLumino") {
            creature = "octoLuminoHablando";
        } else if (currentBot == "octoElectrico") {
            creature = "octoElectricoHablando";
        } else if (currentBot == "dinobot") {
            creature = "hablando";
        } else if (currentBot == "dinoRojo") {
            creature = "dinoRojoHablando";
        } else if (currentBot == "dinoFuego") {
            creature = "dinoFuegoHablando";
        } else if (currentBot == "sharkbot") {
            creature = "sharkTalking";
        } else if (currentBot == "sharkMad") {
            creature = "sharkMadTeeth";
        } else if (currentBot == "sharkAngry") {
            creature = "sharkAngrySwim";
        }


        var talkDino = '<img src="images/' + creature + '.gif" class="card-image" alt="...">';

        $("#dinoCard").html("");
        $("#dinoCard").append(talkDino)

        // this is just so the robot's chat always scrolls down with any new messages
        var chatBox = $('#chatBox');
        var height = chatBox[0].scrollHeight;
        chatBox.scrollTop(height);
    }

    function appendBotRes() {
        // this is just so the robot's chat always scrolls down with any new messages
        var chatBox = $('#chatBox');
        switch(replyBot) {
            case "Obras:": console.log("eureka obras")
            var specialKeywordCard = keywordObrasCard;
              break;
              case "Contacto:": console.log("eureka contacto");
              break;
              case "Inicio:": console.log("eureka inicio");
              break;
              case "Proyectos:": console.log("eureka proyectos");
              break;


          }
          var rbCard = '<div class="botResCard" role="alert">' + replyBot + '</div>';
          $("#chatBox").append(rbCard);
          var height = chatBox[0].scrollHeight;
          chatBox.scrollTop(height);

          $("#chatBox").append(specialKeywordCard)
          var height = chatBox[0].scrollHeight;
          chatBox.scrollTop(height);

          setTimeout(defaultSettings, 2000);
    }
})