$(function(){
  $(".glitch-img1").mgGlitch({
    destroy: false,
    glitch: true,
    scale: true,
    blend: true,
    blendModeType: 'hue',
    glitch1TimeMin: 200,
    glitch1TimeMax: 400,
    glitch2TimeMin: 10,
    glitch2TimeMax: 100,
  });
	
	$(".glitch-img2").mgGlitch({
    destroy: false,
    glitch: true,
    scale: true*0.05,
    blend: true*0.05,
    blendModeType: 'hue',
    glitch1TimeMin: 200,
    glitch1TimeMax: 400,
    glitch2TimeMin: 10,
    glitch2TimeMax: 100,
  });
	
	
});
