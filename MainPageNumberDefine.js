const stats = null;
const URL = ""; 

async function getData(dataArray, url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP запроса к ${url}, статус: ${response.status}`);
    }

    const apiData = await response.json();

    console.log("Запрос успешен, получены данные:", apiData);

  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}
