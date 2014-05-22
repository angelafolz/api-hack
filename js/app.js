function Category(name, image, feed){
	this.name = name;
	this.image = image;
	this.feed = feed;
}

var flyingtrapeze = new Category("Flying trapeze", "images/flyingtrapeze.jpg", "feed");


$(document).ready(function(){

	$(".categories li").click(function(){
		$(".main").hide();
		var catName = $(this).attr("class");
		$(".category").addClass(catName).show();
	});

	$(".home").click(function(){
		$(".category").hide().removeClass().addClass("category");
		$(".main").show();
	});

});