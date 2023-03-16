const axios = require('axios');
const cheerio = require('cheerio');

function getData() {
  axios.get('http://gasprice.kapook.com/gasprice.php#ptt').then(({ data }) => {
    const $ = cheerio.load(data);
    let name = 'body > section > article.gasprice.ptt > ul > li > span';
    let price = 'body > section > article.gasprice.ptt > ul > li > em';
    
    let arr = []
    $(name).each((index, element) => {
      arr.push({ name: $(element).text() })
    });

    $(price).each((index, element) => {
      arr[index]['price'] = $(element).text()
    });
  });
  
  console.log(arr);
  return arr;
}

let test = getData();
