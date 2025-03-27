export async function GET(req) {
  const {searchParams}= new URL(req.url);
  const type = searchParams.get("type");
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const videoId = searchParams.get("id");

  const apiKey =;
 
  try {
    let response;
    if(type=="byId"){
      if(category==""){
        response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&chart=mostPopular&maxResults=50&key=${apiKey}`
        );
      }else{
        response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${category}&chart=mostPopular&maxResults=50&key=${apiKey}`
        );
      }
    }else if(type=="search"){
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=50&key=${apiKey}`
      );
    }else if(type == "single"){
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
      );
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
