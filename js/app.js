function Category(apparatus, image, feed){
	this.apparatus = apparatus;
	this.image = image;
	this.feed = feed;
}

var allCategories = {
	flyingtrapeze: new Category("Flying trapeze", "images/flyingtrapeze.jpg", "feed"),
	aerialhoop: new Category("Aerial hoop", "images/hoop.png", "feed"),
	germanwheel: new Category("German wheel", "images/germanwheel.jpg", "feed"),
	handbalancing: new Category("Hand balancing", "images/handbalancing.jpg", "feed"),
	firejuggling: new Category("Fire juggling", "images/firejuggling.png", "feed")
};


$(document).ready(function(){

	$(".categories li").click(function(){
		var catName = $(this).attr("class");

		var result = $.ajax({
			url: "https://api.instagram.com/v1/tags/" + catName + "/media/recent?client_id=5f968bc326934370a84a2cb351aacf63",
			dataType: "jsonp",
			type: "GET",
		})
		.done(function(result){
			$.each(result.data, function(i, data) {
				$(".feed").append('<li><img src="' + data.images.standard_resolution.url + '"></li>');
			});

			$(".main").hide();
			$(".category").addClass(catName).prepend("<h1>" + allCategories[catName].apparatus + "</h1>").show();
		})
		.fail(function(jqXHR, error, errorThrown){
			alert("Oops! Query failed.");
		});
	});

	$(".home").click(function(){
		$(".category").hide().removeClass().addClass("category").children("h1").remove();
		$(".main").show();
		$(".feed").children().remove();
	});

});