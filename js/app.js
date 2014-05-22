function Category(apparatus, image, feed){
	this.apparatus = apparatus;
	this.image = image;
	this.feed = feed;
}

var allCategories = {
	flyingtrapeze: new Category("Flying trapeze", "images/flyingtrapeze.jpg", "feed"),
	aerial: new Category("Aerial hoop", "images/hoop.png", "feed"),
	germanwheel: new Category("German wheel", "images/germanwheel.jpg", "feed"),
	handbalancing: new Category("Hand balancing", "images/handbalancing.jpg", "feed"),
	firejuggling: new Category("Fire juggling", "images/firejuggling.png", "feed")
};


$(document).ready(function(){

	$(".categories li").click(function(){
		$(".main").hide();
		var catName = $(this).attr("class");
		$(".category").addClass(catName).prepend("<h1>" + allCategories[catName].apparatus + "</h1>").show();
	});

	$(".home").click(function(){
		$(".category").hide().removeClass().addClass("category").children("h1").remove();
		$(".main").show();
	});

});