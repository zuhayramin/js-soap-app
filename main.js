var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml; charset=utf-8");

var raw = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap12:Envelope xmlns:soap12=\"http://www.w3.org/2003/05/soap-envelope\">\n  <soap12:Body>\n    <ListOfContinentsByName xmlns=\"http://www.oorsprong.org/websamples.countryinfo\">\n   </ListOfContinentsByName>\n  </soap12:Body>\n</soap12:Envelope>";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso", requestOptions)
  .then(response => response.text())
  .then(result => {
    xml2js.parseString(result.data, (error, result) => {
              if (error) {
                console.error(error);
              } else {
                // Handle the parsed result
                console.log(result);
              }
            })
        })

// const axios = require('axios');
// const xml2js = require('xml2js');

// const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso';
// const headers = {
//   'Content-Type': 'text/xml; charset=utf-8',
// };
// const xmlData = `<?xml version="1.0" encoding="utf-8"?>
// <soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
//   <soap12:Body>
//     <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
//     </ListOfContinentsByName>
//   </soap12:Body>
// </soap12:Envelope>`;

// axios.post(url, xmlData, { headers })
//   .then(response => {
//     // Parse the SOAP response
//     xml2js.parseString(response.data, (error, result) => {
//       if (error) {
//         console.error(error);
//       } else {
//         // Handle the parsed response
//         console.log(result);
//       }
//     });
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });
