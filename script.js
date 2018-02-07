
// FADE IN FOR IMAGES

var random = [5, 2, 4, 8, 9, 3, 10, 1, 6, 7, 12, 11, 13]
	var showImages = function () {
		// var random = Math.floor(Math.random() * 13)
		if (random.length > 0) {
			console.log('random', random.length)
			var number = random.shift();
			console.log(number)
			$(`.photo:nth-child(${number})`).css('display', 'block')
			$(`.photo:nth-child(${number})`).addClass(`photo-${number}`)
		}
	}


	var interval = setInterval(showImages, 200)

	setTimeout(function () {
		clearInterval(interval)
	}, 7000)

// end fade in


// Modal sign up
	$('.sign-up').on('click', function () {
		openModal();
	})
	$('.close').on('click', function () {
		closeModal();
	})
	function centerModal() {
		var modal = $('.modal.open');
		var mWidth = modal.outerWidth()
		console.log(mWidth)
		var mHeight = modal.outerHeight();
		var width = $(window).width();
		var height = $(window).height();
		if ((width % 1) != 0) {
			width = Math.round(width)
		}
		if ((height % 1) != 0) {
			height = Math.round(height)
		}
		var topPos = (height / 2) - (mHeight / 2);
		var leftPos = (width / 2) - (mWidth / 2);
		modal.css({ top: topPos, left: leftPos })
	}
	//open modal and overlay,
	function openModal() {
		$('.modal').removeClass('hidden').addClass('open');
		$('.modal--overlay').removeClass('hidden').addClass('open');
		$('body').css('overflow', 'hidden');
		centerModal();
	}

	//close modal and overlay,
	function closeModal(overlay) {
		$('.modal--overlay').addClass('hidden').removeClass('open');
		$('.modal.open').addClass('hidden').removeClass('open');
		$('body').css('overflow', 'auto');
	}

	var $form = $('#sign-up'),
		url = 'https://script.google.com/macros/s/AKfycbwVIoJvPnRT3eLdkldOD5iHAnWt2ZtKdaT30hWXhc7ioXLu_v6A/exec'

	$('#sign-up').on('submit', function (e) {
		console.log($form)
		e.preventDefault();
		var jqxhr = $.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: $form.serializeObject()
		}).success(
			// do something
			closeModal()
			);
	})

// end modal sign up