export async function fetchVideoGames() {
  const url = 'https://opencritic-api.p.rapidapi.com/game?';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a6a8f23784msh7fe074b4d08037fp1a474cjsn3801778943ad',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
    }
};

   
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
  
}