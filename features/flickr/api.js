import Constants from 'expo-constants';


const fetchRecentPhotos = async ({perPage}) => {
  const { flickr } = Constants.manifest.extra;
  const { apiUrl, apiKey } = flickr;

  const url = `${apiUrl}?method=flickr.photos.getRecent&
    api_key=${apiKey}&
    per_page=${perPage}&
    format=json&
    nojsoncallback=1&
    extras=url_s`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Somothing go wrong fetching images.');
  }
  const data = await response.json();
  const photos = data.photos.photo

  return photos.map(item => {
    return (({
      url_s: url,
      height_s: height,
      width_s: width,
      ...rest
    }) => ({url, height, width, ...rest}))(item)
  });

}

export default fetchRecentPhotos

