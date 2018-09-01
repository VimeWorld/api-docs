var API_DOMAIN = "https://api.vime.world";

jQuery(function() {
	var $sidebar = $('#sidebar'),
		$nav = $('.nav'),
		$main = $('.main');

	var found = true;

	var $el;

	$("section > div.highlighter-rouge:first-of-type").each(function(i) {

		var $this = $(this).before('<ul class="languages"></ul>'),
		$languages = $this.prev(),
		$notFirst = $this.nextUntil(":not(div.highlighter-rouge)"),
		$all = $this.add($notFirst);

		$all.add($languages).wrapAll('<div class="code-viewer"></div>');
		$all.each(function(i){
			$this1 = $(this);
			var url = $this1.attr('url');
			if (url != undefined)
				$this1.prepend('<a class="api-url" href="'+API_DOMAIN+url+'" target="_blank"><img src="images/external.svg" width="16" height="16"> '+API_DOMAIN+url+'</a>');
		});

		listLanguages($all, $languages);

		$this.css('display', 'block');
		$notFirst.css('display', 'none');

		$languages.find('a').first().addClass('active');

		$languages.find('a').click(function() {
			$all.css('display', 'none');
			$all.eq($(this).parent().index()).css('display', 'block');

			$languages.find('a').removeClass('active');
			$(this).addClass('active');
			return false;
		});

		if ($languages.children().length === 0) {
			$languages.remove();
		}
	});

	function listLanguages($el, $insert) {
		$el.each(function(i) {
			var title = $(this).attr('title');
			if (title) {
				$insert.append('<li><a href="#">' + title + '</a></li>');
			}
		});
	}

	var href = $('.sidebar a').first().attr("href");
	if ($('#index-page').length && href !== undefined && href.indexOf("#") != -1) {
		setActiveSidebarLink();

		$(window).on("scroll", function(evt) {
			setActiveSidebarLink();
		});
	}

	function setActiveSidebarLink() {
		$('.sidebar a').removeClass('active');
		var $closest = getClosestHeader();
		$closest.addClass('active');
		document.title = $closest.text();
	}
});

function getClosestHeader() {
	var $links = $('.sidebar a'),
	top = window.scrollY,
	$last = $links.first();

	if (top < 300) {
		return $last;
	}

	if (top + window.innerHeight >= $(".main").height()) {
		return $links.last();
	}

	for (var i = 0; i < $links.length; i++) {
		var $link = $links.eq(i),
		href = $link.attr("href");

		var index;
		if (href !== undefined && (index = href.indexOf("#")) != -1) {
			var $anchor = $(href.substr(index));

			if ($anchor.length > 0) {
				var offset = $anchor.offset();

				if (top < offset.top - 300) {
					return $last;
				}

				$last = $link;
			}
		}
	}
	return $last;
}
