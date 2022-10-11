const getData = async (btn) => {
  document.getElementById("btn").value = "Loading...";
  if(document.getElementById("btn").value === "Loading..."){
    document.getElementById('loader').setAttribute( "class", "loaderClass" );
  }
  setTimeout(() => {
    document.getElementById('loader').setAttribute( "class", "")
    setTimeout(() => (document.getElementById("btn").value  = "Find"),
  4000);
  },4000);
  const link =
    document.getElementById('inputLink').value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf3cf04552msh2972ad3072436adp1771d8jsn478315caba36",
      "X-RapidAPI-Host": "youtube-dl4.p.rapidapi.com",
    },
  };
  const data = await fetch(
    `https://youtube-dl4.p.rapidapi.com/fc8c5416b9cfd8fc?url=${link}`,
    options
  );
  const response = await data.json();

  const video = document.getElementById("video");
  const source = document.getElementById("src");
  source.setAttribute("src", response.formats[0].url);
  video.setAttribute("poster",response.videoDetails.thumbnails[0].url)
  video.load();

};

