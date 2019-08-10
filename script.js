$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.slider').slider();
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left'
  });  //add with instagram api call items to carousel that are images from insta
  // $('.carousel-item')

  // $("#submit").click(function (e) {
  let code = "9ac583e08079458982c402f7f7af5f85";
  let err = null;
  let client = "107588feb28a41fd827dfe7f4513f9b1";
  let secret = "6b608b3a5232423e8ed041d9e07671ee ";
  let token = "17684442267.1677ed0.e42d3d64b2054a18a382c5e596946f87";
  if (err === null) {
    $.ajax({
      type: "GET",
      // url: "https://api.instagram.com/v1/users/self/?access_token="+token,
      url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + token,
      dataType: "json",
      success: function (results, status, xhr) {
        console.log(results);

        // loop thru results.data[i] to get all data and display inside the 
        // carousel at the loading of the page 
        for (i = 0; i < results.data.length; i++) {
          $("#carouselPhone").append("<a class='carousel-item' href='" + results.data[i].images.standard_resolution.url + "'><img src='" + results.data[i].images.standard_resolution.url + "'></a>");
          // $("#instaPicture").append("<a href='"+results.data.profile_picture+"'><img src='"+results.data.profile_picture+"'></a>");
          console.log("appended");
          $("#carousel-computer").append("<a class='carousel-thing' href='" + results.data[i].images.standard_resolution.url + "'><img class='deskInstaImg'src='" + results.data[i].images.standard_resolution.url + "'></a></li");
          $('.carousel').carousel();
        }
      }



      // client_id: client,
      // client_secret: secret,
      // grant_type: "authorization_code",
      // redirect_uri: "localhost:5500",
      // code: "9ac583e08079458982c402f7f7af5f85"
      // success: function(results, status, xhr){
      // }
    }
    )

  }



  var timer = 4000;

  var i = 0;
  var max = 24;
  // $('#carousel-computer > a').length;

  $("#carousel-computer > a").eq(i).addClass('active').css('left', '0');
  $("#carousel-computer > a").eq(i + 1).addClass('active').css('left', '15%');
  $("#carousel-computer > a").eq(i + 2).addClass('active').css('left', '30%');
  $("#carousel-computer > a").eq(i + 3).addClass('active').css('left', '45%');
  $("#carousel-computer > a").eq(i + 4).addClass('active').css('left', '60%');
  $("#carousel-computer > a").eq(i + 5).addClass('active').css('left', '75%');

  setInterval(function () {

    $("#carousel-computer > a").removeClass('active');

    $("#carousel-computer > a").eq(i).css('transition-delay', '0.20s');
    $("#carousel-computer > a").eq(i + 1).css('transition-delay', '0.40s');
    $("#carousel-computer > a").eq(i + 2).css('transition-delay', '0.60s');
    $("#carousel-computer > a").eq(i + 3).css('transition-delay', '0.80s');
    $("#carousel-computer > a").eq(i + 4).css('transition-delay', '1s');
    $("#carousel-computer > a").eq(i + 5).css('transition-delay', '1.20s');

    if (i < max - 6) {
      i = i + 6;
    }

    else {
      i = 0;
    }

    $("#carousel-computer > a").eq(i).css('left', '0').addClass('active').css('transition-delay', '1.25s');
    $("#carousel-computer > a").eq(i + 1).css('left', '15%').addClass('active').css('transition-delay', '1.5s');
    $("#carousel-computer > a").eq(i + 2).css('left', '30%').addClass('active').css('transition-delay', '1.75s');
    $("#carousel-computer > a").eq(i + 3).css('left', '45%').addClass('active').css('transition-delay', '2s');
    $("#carousel-computer > a").eq(i + 4).css('left', '60%').addClass('active').css('transition-delay', '2.25s');
    $("#carousel-computer > a").eq(i + 5).css('left', '75%').addClass('active').css('transition-delay', '2.50s');

  }, timer);

});
// });

//Need to add a favicon.ico
//Need to add Jquery initialization
//Need to load dom with materialize components working before the website is displayed
//Need to add insta pictures to the carousel
//Add pictures of ana to website init
//Fix navbar to the top of the page
//add a footer
//add interaction in the site to send message to her
//add information page for tiocaracoles and productions
//add page of articles
//add page of personal projects
//add opportunity page for future projects to contact her
//create git repo to have it displayed on github pages on my phone

