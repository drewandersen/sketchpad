var initialSideCount = 16;

$(document).ready(function() {

	$('body').append('<button id="reset">Reset</button>');
	$('#reset').css('height', '50px');

	buildGrid(initialSideCount);

	$('#reset').click(function() {
		var sideCount = prompt("New grid size?");
		buildGrid(sideCount <= 64 ? sideCount : 64);
  });
});

function buildGrid(sideCount) {
	$('#root').remove();
	$('body').append('<div id="root"/>');
	var totalSize = Math.min($(document).width(), $(document).height() - 50);
	$('#root').css('height', totalSize);
	$('#root').css('width', totalSize);
	var unitSize = Math.floor(totalSize / sideCount);
	for (var col = 0; col < sideCount; col++) {
		for (var row = 0; row < sideCount; row++) {
			var current = $('<div class="grid"/>');
			current.css('height', unitSize);
			current.css('width', unitSize);
			current.css('display', 'block');
			current.css('float', 'left');
			current.css('vertical-align', 'top');
			current.hover(function() {
				$(this).css('background-color', 'black');
			});
	  		$("#root").append(current);
		}
	}
}

