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

export async function fetchVideoGame(gameId) {
  const url = `https://opencritic-api.p.rapidapi.com/game/${gameId}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '59df2c6d4fmsh00f279fccc7fee5p15be1cjsn712e91cbaf90',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
    }
};

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}