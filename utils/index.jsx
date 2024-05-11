export async function fetchVideoGames() {
  const url = 'https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a6a8f23784msh7fe074b4d08037fp1a474cjsn3801778943ad',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	  }
  }
   
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  return result
}