$(document).ready(function() {
  $('a.adx').qtip({
    content: { text: 'ADX Records' },
    position: {
      my: 'bottom right',
      at: 'top center',
    },
    style: { classes: 'ui-tooltip-shadow ui-tooltip-tipsy' },
  });

  $('a.discogs').qtip({
    content: { text: 'Discogs' },
    position: {
      my: 'bottom right',
      at: 'top center',
    },
    style: { classes: 'ui-tooltip-shadow ui-tooltip-tipsy' },
  });

  $('a.soundcloud').qtip({
    content: { text: $('#soundcloudstream') },
    position: {
      my: 'bottom right',
      at: 'top center',
    },
    hide: { event: 'mouseenter', target: $('#center, a.outlink').not('.soundcloud') },
    style: { classes: 'ui-tooltip-shadow ui-tooltip-tipsy' },
  });

  $('a.bandcamp').qtip({
    content: { text: 'Bandcamp' },
    position: {
      my: 'bottom right',
      at: 'top center',
    },
    style: { classes: 'ui-tooltip-shadow ui-tooltip-tipsy' },
  });

  $('a.youtube').qtip({
    content: { text: $('#youtubevideos') },
    position: {
      my: 'bottom right',
      at: 'top center',
    },
    hide: { event: 'mouseenter', target: $('#center, a.outlink').not('.youtube') },
    style: { classes: 'ui-tooltip-shadow ui-tooltip-tipsy' },
  });

  $('#youtubevideos').youTubeChannel({ 
    userName: 'illuminoscillate', 
    channel: "uploads", 
    hideAuthor: true,
    numberToDisplay: 6,
    linksInNewWindow: true
    //other options
    //loadingText: "Loading...",                    
  });
});
