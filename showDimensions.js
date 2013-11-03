$(document).ready(function() {
  function showDimensions() {
    
    // get initial dimensions
    var initialWidth = $(window).width();
    var initialHeight = $(window).height();
    
    // create the container div
    var viewPortRuler = document.createElement('div');

    // place the intial dimensions into the div
    viewPortRuler.appendChild(document.createTextNode(initialWidth + ' x ' + initialHeight));

    // set its style properties
    $(viewPortRuler)
      .css({
        'background':'#EEE',
        'border-radius' : '2px',
        'position' : 'fixed',
        'border' : '1px solid #AAA',
        'bottom' : 0,
        'font-size' : '0.875em',
        'right' : 0,
        'padding' : '3px 7px',
        'margin' : '6px',
        'cursor' : 'pointer',
        'box-shadow' : '0 2px 1px #CCC',
        'z-index' : 9999
      });

    // prepend the div to the body
    $(viewPortRuler).prependTo($('body'));

    // update the div when the window is resized
    $(window).resize(function() {
      $(viewPortRuler).html($(window).width() + ' x ' + $(window).height());
    });
  }
  showDimensions();
})