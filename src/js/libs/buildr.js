class Buildr {

	constructor() {
		this.init();
	}

	init() {
		console.log('buildr init');


		let _changeInterval = null;
		jQuery('.buildr-section-block-value').on('keyup', function(e) {
			if(jQuery(this).hasClass('buildr-skip-save')) {

			}
			else {
				if(jQuery(this).hasClass('buildr-map-search')) {

				}
				else {
					// wait untill user type in something
					// Don't let call setInterval - clear it, user is still typing
					clearInterval(_changeInterval);
					_changeInterval = setInterval(function() {
						// Typing finished, now you can Do whatever after 2 sec
						console.log('saving data');
						clearInterval(_changeInterval);
					}, 2000);
				}
			}
		});

		jQuery('.buildr-section-block-value').on('change', function() {
			let item;
			item = jQuery(this);
			console.log(item.val());
		});
	}

}