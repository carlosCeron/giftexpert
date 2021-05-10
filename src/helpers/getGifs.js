

export const getGifs = async (category) => {
  const apiKey = "qNl9pBFbmmnY9rKjK8p30Zh5aCMqJP3C";
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=${limit}`;
  const resp = await fetch(url);

  const { data } = await resp.json();
  
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};