$(document).ready(function(){

	//checkbox labels
	 $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'fa fa-check'
                },
                off: {
                    icon: ''
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-nonactive')
                    .addClass('btn-selected');
            }
            else {
                $button
                    .removeClass('btn-selected')
                    .addClass('btn-nonactive');
            }
        }



        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });

	//top notification
	$('.closetop').click(function(){
		$('.top-notification').fadeOut();
	});
        
	//responsive nav
	$('.resopen').click(function(){
		if(!$('.responsive-navigation-sidebar').hasClass('slide'))$('.responsive-navigation-sidebar').addClass('slide');
	});

	$('.navclose a').click(function(){
		if($('.responsive-navigation-sidebar').hasClass('slide'))$('.responsive-navigation-sidebar').removeClass('slide');
	});


});