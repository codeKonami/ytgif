const ytgif = () => {
  const ytgifClass = 'ytgif';

  // Get all ytgif nodes
  const allNodes = document.getElementsByTagName('*');
  let ytgifNodes = [];
  for (let i in allNodes) {
    if((' ' + allNodes[i].className + ' ').indexOf(' ' + ytgifClass + ' ') > -1) {
        allNodes[i].setAttribute('id', generateId());
        ytgifNodes.push(allNodes[i]);
    }
  }

  // If there is no ytgif we can stop here
  if (ytgifNodes.length == 0) {
    return;
  }

  // Insert the Youtube script
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let players = [];
  function onPlayerReady(event) {
    // Gifs have no sound
    event.target.mute();

    // This is needed on mobile phone
    event.target.playVideo();

    setInterval(function () {
      if(event.target.getCurrentTime() > event.target.getDuration() - 1) {
        event.target.seekTo(0);
      }
    }, 200)
  }

  global.onYouTubePlayerAPIReady = () => {
    for (let i in ytgifNodes) {
      players.push(
        new YT.Player(ytgifNodes[i].getAttribute('id'), {
          videoId: ytgifNodes[i].getAttribute('data-ytgif-id'),
          width: ytgifNodes[i].getAttribute('data-ytgif-width'),
          height: ytgifNodes[i].getAttribute('data-ytgif-height'),
          playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            disablekb: 0,
            autohide: 1,
            modestbranding: 1
          },
          events: {
            'onReady': onPlayerReady
          }
        })
      )
    }
}

};

const generateId = () => {
  return ",,,,,".replace(/,/g,function (){return "AzByC0xDwEv9FuGt8HsIrJ7qKpLo6MnNmO5lPkQj4RiShT3gUfVe2WdXcY1bZa".charAt(Math.floor(Math.random()*62))});
}

module.exports = ytgif;
