import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';


export default () => {

      var params = {
          headers: {
            'Ocp-Apim-Subscription-Key': '6d130b90fcef40faa3b83fdbddb193a3',
          },
        };

  let response = http.get(`https://owp-appservice.azurewebsites.net/`, '', params);

  sleep(2);

  response = http.get(`http://owp-std-apim.azure-api.net/owp-weather/weatherforecast`, '', params);
  check(response, {
    'status is 200': (r) => r.status == 200,
  })


  sleep(3);
};
