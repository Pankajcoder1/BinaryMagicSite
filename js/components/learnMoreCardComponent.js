function createPlaylist(){

  const playlists = [
    {
      title: "C++ full course for Beginners",
      url: "https://www.youtube.com/playlist?list=PL-qFZbR0uFeeadmCEcOrI6X-xQoYyexQMl",
      videoUrl:
        "https://www.youtube.com/embed/videoseries?list=PL-qFZbR0uFeeadmCEcOrI6X-xQoYyexQM",
    },
    {
      title: "CSES Sorting and Searching playlist",
      url: "https://www.youtube.com/playlist?list=PL-qFZbR0uFedevOG3hi-OmJhvMcxLaH_3",
      videoUrl:
        "https://www.youtube.com/embed/videoseries?list=PL-qFZbR0uFedevOG3hi-OmJhvMcxLaH_3",
    },
    {
      title: "Leetcode Top Interview questions playlist",
      url: "https://www.youtube.com/playlist?list=PL-qFZbR0uFed-uEYCnH0bpV7u7f0OLKzK",
      videoUrl:
        "https://www.youtube.com/embed/videoseries?list=PL-qFZbR0uFed-uEYCnH0bpV7u7f0OLKzK",
    },
    {
      title: "CSES Introductory playlist",
      url: "https://www.youtube.com/playlist?list=PL-qFZbR0uFedl6LCG073jJQPWc_VIh8tc",
      videoUrl:
        "https://www.youtube.com/embed/videoseries?list=PL-qFZbR0uFedl6LCG073jJQPWc_VIh8tc",
    },
  ];

  playlists.forEach((playlist) => {
    const card = createPlaylistCard(playlist);
    playlistContainer.appendChild(card);
  });

}

function createPlaylistCard(playlist) {
  const card = document.createElement("div");
  card.className = "col-auto mb-3";
  card.innerHTML = `
      <div class="card">
        <div class="embed-responsive embed-responsive-16by9 text-center container">
          <iframe src="${playlist.videoUrl}" frameborder="0" allow="autoplay; encrypted-media"></iframe>
        </div>
        <div class="card-body">
          <h3>${playlist.title}</h3>
          <a class="btn" href="${playlist.url}">Watch here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    `;
  return card;
}
