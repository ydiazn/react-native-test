import Constants from 'expo-constants';

const autocompletePlacesBaseUrl = "https://api.tomtom.com/search/2/autocomplete";
const searchPlacesBaseUrl = "https://api.tomtom.com/search/2/poiSearch";
const { apiKey } = Constants.manifest.extra.tomtom;



const defaultAutocompleteParameters = {
  language: "en-US",
  limit: 10,
  ext: "json",
}

const defaultSearchParameters = {
  limit: 1,
}


async function autocompletePlacesSearch(q, location, params: {}) {
  const { latitude, longitude } = location.coords;
  const { language, limit, ext } = {...params, ...defaultAutocompleteParameters }
  const url = `${autocompletePlacesBaseUrl}/${q}?ext=${ext}&key=${apiKey}&language=${language}&limit=${limit}&lat=${latitude}&lon=${longitude}`;
  const response = await fetch(url);
  const data = await response.json();
  const { results } = data;

  let items = [];
  results.forEach(result => {
    const { segments } = result;
    segments.forEach(segment => items.push({value: segment.value}))
  })

  return items;
}


async function placesSearch(q, location, params) {
  const { latitude, longitude } = location.coords;
  const { limit } = { ...params, ...defaultSearchParameters }
  const url = `${searchPlacesBaseUrl}/${q}.json?key=${apiKey}&limit=${limit}&lat=${latitude}&lon=${longitude}`;
  const response = await fetch(url);
  const data = await response.json();
  const { results } = data;

  return results;
}


export { autocompletePlacesSearch, placesSearch }

