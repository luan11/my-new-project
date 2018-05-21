// IIFE - Immediately Invoked Function Expression
(function($, window, document) {

    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    $(function() {

        // The DOM is ready!

    });

    // The rest of the code goes here!

    // slick sliders instructions

    // primary container 
    $('.plr-carousel-primary-container').slick({
    	arrows:false,
    	dots: true,
    	autoplay:true,
    	infinite: true,
    	slidesToShow: 1,
    	speed:500
    });

    // secondary container
    $('.plr-secondary-carousel').slick({
    	arrows:false,
    	dots:true,
    	dotsClass:'slick-dots-secondary',
    	slidesToShow: 3,
    	infinite:false,
    	responsive: [
    	{
    		breakpoint: 780,
    		settings: {
    			arrows: false,
    			slidesToShow: 1
    		}
    	} ]
    });

    // end slick slider instructions

    // maps display
    function initialize() {
    	var map;
    	var bounds = new google.maps.LatLngBounds();
    	var mapOptions = {
    		scrollwheel: false,
    		mapTypeId: 'roadmap',
    	};

            // Display a map on the page
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            map.setTilt(45);

            // Multiple Markers
            var markers = [
            ['Matriz', -23.466289, -46.529239]
            ];

            // Info Window Content
            var infoWindowContent = [
            ['<div class="info-content">' +
            '<h4>MATRIZ</h4>' +
            '<p><strong>Rua João Gonçalves, 484</strong><br>' +
            'Guarulhos, São Paulo<br>' +
            'Tel.: (11) 4215-5743<br>' + 
            'Whatsapp.: (11) 9.5498-1070</p>' + '</div>'],
            ];

            // Display multiple markers on a map
            var infoWindow = new google.maps.InfoWindow(), marker, i;

            
            // Loop through our array of markers & place each one on the map  
            for( i = 0; i < markers.length; i++ ) {
            	var position = new google.maps.LatLng(markers[i][1], markers[i][2], markers[i][3]);
            	bounds.extend(position);
            	marker = new google.maps.Marker({
            		position: position,
            		icon: '../assets/images/map-marker.png',
            		map: map,
            		animation: google.maps.Animation.DROP,
            		title: markers[i][0],

            	});


                // Allow each marker to have an info window    
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                	return function() {
                		infoWindow.setContent(infoWindowContent[i][0]);
                		infoWindow.open(map, marker);
                	}
                })(marker, i));

                // Automatically center the map fitting all markers on the screen
                map.fitBounds(bounds);
            }

            // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
            var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
            	this.setZoom(17);
            	google.maps.event.removeListener(boundsListener);
            });   
        }

        google.maps.event.addDomListener(window, 'load', initialize);  

    //};
    //end maps display


    // form validate
    // form footer items
        var contactForm     = document.getElementById('plr-form-footer');
        var inputName       = document.getElementById('plr-form-contact-name');
        var inputTel        = document.getElementById('plr-form-contact-tel');
        var inputEmail      = document.getElementById('plr-form-contact-email');
        var inputSubject    = document.getElementById('plr-form-contact-subject');
    // Function to validate the contact form
    if (typeof(contactForm) != 'undefined' && contactForm != null) {
    	contactForm.addEventListener('submit', function(e) {
    		if (inputName.value == '') {
    			inputName.classList.add('plr-form-error');
    			e.preventDefault();
    		} if (inputTel.value == '') {
    			inputTel.classList.add('plr-form-error');
    			e.preventDefault();
    		} if (inputEmail.value == '') {
    			inputEmail.classList.add('plr-form-error');
    			e.preventDefault();
    		} if (inputSubject.value == '0') {
    			inputSubject.classList.add('plr-form-error');
    			e.preventDefault();
    		}
    	});

    	contactForm.addEventListener('focusout', function(e) {
    		if (inputName.value != '') {
    			inputName.classList.remove('plr-form-error');
    			e.preventDefault();
    		} if (inputTel.value != '') {
    			inputTel.classList.remove('plr-form-error');
    			e.preventDefault();
    		} if (inputEmail.value != '') {
    			inputEmail.classList.remove('plr-form-error');
    			e.preventDefault();
    		} if (inputSubject.value != '0') {
    			inputSubject.classList.remove('plr-form-error');
    			e.preventDefault();
    		}
    	});    
    }
    // End

    // Function to mask the input tel
    inputTel.addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
    // End

    /* ----------------------------------------------------------------------------------- */

    // form lb items
        var contactForm_lb     = document.getElementById('plr-form-lb');
        var inputName_lb       = document.getElementById('plr-form-contact-name-lb');
        var inputTel_lb        = document.getElementById('plr-form-contact-tel-lb');
        var inputEmail_lb      = document.getElementById('plr-form-contact-email-lb');
        var inputSubject_lb    = document.getElementById('plr-form-contact-subject-lb');
    // Function to validate the contact form
    if (typeof(contactForm_lb) != 'undefined' && contactForm_lb != null) {
    	contactForm_lb.addEventListener('submit', function(e) {
    		if (inputName_lb.value == '') {
    			inputName_lb.classList.add('plr-form-error');
    			e.preventDefault();
    		} if (inputTel_lb.value == '') {
    			inputTel_lb.classList.add('plr-form-error');
    			e.preventDefault();
    		} if (inputEmail_lb.value == '') {
    			inputEmail_lb.classList.add('plr-form-error');
    			e.preventDefault();
    		} if (inputSubject_lb.value == '0') {
    			inputSubject_lb.classList.add('plr-form-error');
    			e.preventDefault();
    		}
    	});

    	contactForm_lb.addEventListener('focusout', function(e) {
    		if (inputName_lb.value != '') {
    			inputName_lb.classList.remove('plr-form-error');
    			e.preventDefault();
    		} if (inputTel_lb.value != '') {
    			inputTel_lb.classList.remove('plr-form-error');
    			e.preventDefault();
    		} if (inputEmail_lb.value != '') {
    			inputEmail_lb.classList.remove('plr-form-error');
    			e.preventDefault();
    		} if (inputSubject_lb.value != '0') {
    			inputSubject_lb.classList.remove('plr-form-error');
    			e.preventDefault();
    		}
    	});    
    }
    // End

    // Function to mask the input tel
    inputTel_lb.addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
    // End
    // end form validate

    // burger menu function
    $('.burgermenu').click(function(){
        $(this).toggleClass('opened');
        $('body').toggleClass('open-menu');
    });
    // End

    // Close the menu when clicked in an anchor
    $('.menu-items').click(function(){
    //event.preventDefault();
    $('.burgermenu').toggleClass('opened');
    $('body').toggleClass('open-menu');
    });

    // Close menu when click outside the nav
    $('.background-overlay').click(function() {
        $('.burgermenu').toggleClass('opened');
        $('body').toggleClass('open-menu');
    });
    // burguer menu function end

    // scroll page smooth

    var items = $('.plr-nav ul li a');

    items.on('click',function(){
        var selector = $(this).attr('href');
        var pos = $(selector).offset().top;
         $("html, body").animate({scrollTop: pos},700);
    });

    // scroll page smooth end

}(window.jQuery, window, document));