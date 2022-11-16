import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://covid-19-statistics.p.rapidapi.com/reports/total',
  params: {date: '2020-04-07'},
  headers: {
    'X-RapidAPI-Key': '8284a9d108msh6d0512163f46141p1d9275jsncd399cd38006',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
