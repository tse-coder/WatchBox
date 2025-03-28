export async function GET(req) {
  const {searchParams}= new URL(req.url);
  const type = searchParams.get("type");
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const videoId = searchParams.get("id");
  const channelId = searchParams.get("channelId");

  const apiKey = "AIzaSyDKKIJwzcvFRvP-YNsdjbbCBtyvrXTW--k";
 
  try {
    let response;
    if(type=="byId"){
      if(category==""){
        response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&key=${apiKey}`
        );
      }else{
        response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&key=${apiKey}`
        );
      }
    }else if(type=="search"){
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=50&key=${apiKey}`
      );
    }else if(type == "single"){
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${apiKey}`
      );
    }else if(type == "channel"){
      response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
      )
    }

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
