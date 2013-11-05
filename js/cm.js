// // Glitchy text

// /*
//   Original: http://retromodular.com/
// */

// var glitcher = {
// 	init: function () {
//    setTimeout((function () {
   
// 		  this.canvas = document.getElementById( 'stage' );
// 		  this.context = this.canvas.getContext( '2d' );
		
// 		  this.initOptions();
// 		  this.resize();
// 		  this.tick();
//    }).bind(this), 100);
// 	},
// 	initOptions: function () {
		
// 		var canvastext = document.querySelector('#stage'),
//     data = canvastext.dataset;
		
// 		this.width = document.documentElement.offsetWidth;
// 		this.height = window.innerHeight;
		
// 		this.font = 'bold 8vw Arial';
//   this.context.font = this.font;
// 		this.text = data.text;
// 		this.textWidth = (this.context.measureText(this.text)).width;
		
// 		this.fps = 60;
		
// 		this.channel = 0; // 0 = red, 1 = green, 2 = blue
// 		this.compOp = 'lighter'; // CompositeOperation = lighter || darker || xor
		
// 		this.phase = 0.0;
// 		this.phaseStep = 0.05; //determines how often we will change channel and amplitude
// 		this.amplitude = 0.0;
// 		this.amplitudeBase  = 2.0;
// 		this.amplitudeRange = 2.0;
// 		this.alphaMin = 0.8;
		
// 		this.glitchAmplitude = 20.0;
// 		this.glitchThreshold = 0.9; 
// 		this.scanlineBase = 40;
// 		this.scanlineRange = 40;
// 		this.scanlineShift = 15;
		
// 	},
// 	tick: function () {
// 		setTimeout((function () {

// 			this.phase += this.phaseStep;

// 			if( this.phase > 1 ) {
// 				this.phase     = 0.0;
// 				this.channel   = (this.channel === 2) ? 0 : this.channel + 1;
// 				this.amplitude = this.amplitudeBase + (this.amplitudeRange * Math.random());
// 			}
			
// 			this.render();
// 			this.tick();
				
// 		}).bind(this), 1000 / this.fps);
// 	},
// 	render: function () {
// 		var x0 = this.amplitude * Math.sin( (Math.PI * 2) * this.phase ) >> 0,
// 				x1, x2, x3;

// 		if( Math.random() >= this.glitchThreshold ) {
// 			x0 *= this.glitchAmplitude;
// 		}

// 		x1 = this.width - this.textWidth >> 1;
// 		x2 = x1 + x0;
// 		x3 = x1 - x0;

// 		this.context.clearRect( 0, 0, this.width, this.height );
// 		this.context.globalAlpha = this.alphaMin + ((1-this.alphaMin) * Math.random());

// 		switch( this.channel ) {
// 			case 0: this.renderChannels(x1, x2, x3); break;
// 			case 1: this.renderChannels(x2, x3, x1); break;
// 			case 2: this.renderChannels(x3, x1, x2); break;
// 		}

// 		this.renderScanline();
// 	},
// 	renderChannels: function (x1, x2, x3) {
//   this.context.font = this.font;
// 		this.context.fillStyle = "rgb(255,0,0)";
// 		this.context.fillText(this.text, x1, this.height/2);

// 		this.context.globalCompositeOperation = this.compOp;

// 		this.context.fillStyle = "rgb(0,255,0)";
// 		this.context.fillText(this.text, x2, this.height/2);
// 		this.context.fillStyle = "rgb(0,0,255)";
// 		this.context.fillText(this.text, x3, this.height/2);
// 	},
// 	renderScanline: function () {
// 		var y = this.height * Math.random() >> 0,
//       o = this.context.getImageData( 0, y, this.width, 1 ),
//       d = o.data,
//       i = d.length,
//       s = this.scanlineBase + this.scanlineRange * Math.random() >> 0,
//       x = -this.scanlineShift + this.scanlineShift * 2 * Math.random() >> 0;

// 		while( i-- > 0 ) {
// 			d[i] += s;
// 		}

// 		this.context.putImageData( o, x, y );
// 	},
// 	resize: function () {
// 	 if(this.canvas) {
// 			this.canvas.width = document.documentElement.offsetWidth;
// 			this.canvas.height = window.innerHeight;
// 	 }
// 	}
// };

// glitcher.init();
// window.onresize = glitcher.resize;

(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

	//open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
	    button.innerHTML = "-";
	    classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	    $('#menu-help').addClass('open');
	    $('#b-container').addClass('blur');
	}
	function closeNav(){
		open = false;
		button.innerHTML = "Menu";
		classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper, 'opened-nav');
		$('#menu-help').removeClass('open');
		$('#b-container').removeClass('blur');
	}
	document.addEventListener('click', closeNav);

})();
$('.cn-wrapper a').hover(function(){
	$('#menu-help').text($(this).data('hovertext'));
	// TODO: Make the text dissapear when the menu disapears.
});

