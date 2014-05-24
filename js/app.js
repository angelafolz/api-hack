function Category(apparatus, image){
	this.apparatus = apparatus;
	this.image = image;
}

var allCategories = {
	flyingtrapeze: new Category("Flying trapeze", "images/flyingtrapeze.jpg"),
	aerialhoop: new Category("Aerial hoop", "images/hoop.png"),
	germanwheel: new Category("German wheel", "images/germanwheel.jpg"),
	handbalancing: new Category("Hand balancing", "images/handbalancing.jpg"),
	firejuggling: new Category("Fire juggling", "images/firejuggling.png")
};


$(document).ready(function(){

	for (var cat in allCategories) {
		$(".categories").append('<li class="' + cat + '">&nbsp;</li>');
	}

	$(".categories").on("click", "li", function(){
		var catName = $(this).attr("class");

		var result = $.ajax({
			url: "https://api.instagram.com/v1/tags/" + catName + "/media/recent?client_id=5f968bc326934370a84a2cb351aacf63",
			dataType: "jsonp",
			type: "GET"
		})
		.done(function(result){
			$.each(result.data, function(i, data) {
				var content;
				if (data.videos) {
					content = '<video controls><source src="' + data.videos.standard_resolution.url + '" type="video/mp4">Your browser does not support the video tag.</video>';
				} else {
					content = '<img src="' + data.images.standard_resolution.url + '">';
				}
				$(".feed").append('<li><a href="' + data.link + '" target="_blank">' + content + '</a></li>');
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