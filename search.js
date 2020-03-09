function init(){
  console.log("f!");
  gapi.client.setApiKey('AIzaSyCTmn2VL1-pni8B6M03bQHVvPV4zp0zUD4');
  gapi.client.load('youtube','v3',function(){console.log("sup?");});
}

function search(){
    let request = gapi.client.youtube.search.list({
      part:"snippet",
      type:"video",
      q:document.getElementById("search-word").value,
      maxResults:20,
      order:"viewCount"
    });
    request.execute(function(response){
      let results = response.result.items;
      let flexList = document.createElement('result-list');
      for (let i = 0; i < results.length; i++) {
        let iMax = i+4;
        let flexBoxDiv = document.createElement("div");
          while (i < results.length && i < iMax) {
          let node = document.createElement("img");
          console.log(results[i]);
          node.src = results[i]["snippet"]["thumbnails"]["medium"]["url"];
          flexBoxDiv.appendChild(node);
          i++;
        }
        flexList.appendChild(flexBoxDiv);
      }
      document.body.appendChild(flexList);
    });
}
