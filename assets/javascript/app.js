var topics = ["Optimus Prime", "Megatron", "Bumblebee", "Starscream","Ironhide", "Soundwave"];

$(document ).ready(function() {

function renderButtons() {

	$("#transformer-view").empty();

	for (var i = 0; i < topics.length; i++) {
		 var a = $("<button>");
		 a.addClass("transformer");
		 a.attr("data-name", topics[i]);
		 a.text(topics[i]);
		 $("#transformer-view").append(a);
        }
      }

      $("#add-transformer").on("click", function(event) {
      	event.preventDefault();
      	var transformer = $("#transformer-input").val().trim();
      	topics.push(transformer);
      	renderButtons();
      ;
 	});   


function displayTransformers() {
      var topic = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {

      	 var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var topicImage = $("<img>");
            topicImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(topicImage);

            $("#gifs").prepend(gifDiv);

     	};
 	});
 
};	

 $(".gif").on("click", function() {
    	 var state = $(this).attr("data-state");
    	  if(state === "still"){
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate")
            }else{
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still")
            }
   		
   			var results = response.data;

   		for (var i = 0; i < results.length; i++) {
          var topicsDiv = $("<div>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var topicsImage = $("<img>");
          topicImage.attr("src", results[i].images.fixed_height.url);
          topicDiv.append(p);
          topicDiv.append(topicImage);
          $("#gifs").prepend(topicDiv);

     };
 });   
	

	$(document).on("click", ".transformer", displayTransformers)
	renderButtons();
    


     

});	       

    	