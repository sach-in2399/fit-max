export const exerciseOptions= {

method: 'GET',
  params: {limit: '1000'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeOptions = {
  method: 'GET',
  // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData=async function (url,options){
    
    
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}

