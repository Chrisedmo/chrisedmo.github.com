$(document).ready(function() {
	// Dynamic colours for home page buttons
	var opts = {
		parent: '.btn-c',
		normalizeTextColor: true
	};
	$.adaptiveBackground.run(opts);
	// Dynamic JS Menu
	$.getJSON('/allPosts.json', function(data)	{
		var template = '<ul>{{#jsMenu}}<li><a href="{{href}}" title="{{title}}"><h2>{{title}}</h2><p class="date">{{#date}}{{day}} {{month}} {{year}}{{/date}}</p><p>{{short}}</p></a></li>{{/jsMenu}}</ul>';
		var html = Mustache.to_html(template, data);
		$('#b-link').click(function(event){
			event.preventDefault();
			$('#blogNav').html(html);
			$('#offNav').addClass('open');
			$('#b-container').addClass('blur no-scroll');
		}),
		$('#offNav').click(function() {
			$(this).removeClass('open');
			$('#b-container').removeClass('blur no-scroll');
		});
	});
	// Changing colours of social share background
	$('.social-share a').hover (
	  function () {
	    $(".main-footer").css('background-color', $(this).attr("data-color"));
	   },
	  function () {
	    $(".main-footer").css('background-color', '#ddd');
	   }
	 );
});