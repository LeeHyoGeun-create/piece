const API_KEY = "5c7e54c76e9997ba4ad4cc4d5880dc85";
const url = `https://api.themoviedb.org/3/movie/3?api_key=${API_KEY}1`;

async function request($url) {
  try {
    const response = await fetch($url);
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      console.log("error");
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return json;
  } catch (e) {
    console.log(`에러발생: ${e}`);
  }
}

console.log(request(url));
