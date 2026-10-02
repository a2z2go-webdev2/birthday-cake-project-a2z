(function(global){
	global.$_Tawk_AccountKey='5f052843223d045fcb7b821f';
	global.$_Tawk_WidgetId='default';
	global.$_Tawk_Unstable=false;
	global.$_Tawk = global.$_Tawk || {};
	(function (w) {
	function l() {
		if (window.$_Tawk.init !== undefined) {
			return;
		}

		window.$_Tawk.init = true;

		var s0 = document.getElementsByTagName('script')[0];

		/**
		 * The entry is an ES module (Vite output.format:'es'). It must load as
		 * type="module" so its dynamic import() chunks resolve via the
		 * browser's native loader (no third-party runtime). Module scripts
		 * always fetch in CORS mode, so a valid crossorigin value is required
		 * (the CDN already serves the Access-Control-Allow-Origin header).
		 */
		var s1 = document.createElement('script');
		s1.src = 'https://embed.tawk.to/_s/v4/app/6ab62d2918b/js/twk-main.js';
		s1.charset = 'UTF-8';
		s1.type = 'module';
		s1.setAttribute('crossorigin', 'anonymous');
		s0.parentNode.insertBefore(s1, s0);
	}
	if (document.readyState === 'complete') {
		l();
	} else if (w.attachEvent) {
		w.attachEvent('onload', l);
	} else {
		w.addEventListener('load', l, false);
	}
})(window);

})(window);