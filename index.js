const express = require('express');
const axios = require('axios');
var cors = require('cors');
const https = require('https');

const app = express();

const PORT = process.env.PORT || 8888;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.use(cors());

app.get('/api/getUserInfo', (req, res) => {
  const userInfo = {
    uid: "8abaae4c-91f4-4448-b5fd-1020e7613e29",
    username: "Santiago_Cioli",
    firstName: "Santiago",
    lastName: "Cioli",
    email: "Santiago_Cioli@Dellteam.com",
    identityType: null,
    token: "Bearer  1eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MTU5MTEzNTksImlzcyI6Imh0dHBzOi8vd3d3LmRlbGwuY29tLyIsInN1YiI6InNhbnRpYWdvX2Npb2xpIiwiZXhwIjoxNjE1OTE0MzU5fQ.rQT3ST8SmM5BK3bSgONyuN3ds3A3V6nGiJ-IWUPbUfmcxaAb30gjt9_GZnY3FM23lkr7oOqHDsFycF8W85Im7Q"
  };

  const instance = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });

  //falcon-playmaker-api.cfd.isus.emc.com
  //falcon-config-tool-api.cfd.isus.emc.com
  //sb-search-engine-api-dev.cfd.isus.emc.com
  instance.post('https://falcon-config-tool-api.cfd.isus.emc.com/getToken', {
    networkId:"Santiago_Cioli"
  })
  .then(tokenResponse => {
    userInfo.token = tokenResponse.headers.authorization;
    //res.status(401);
    res.send(userInfo);
  })
  .catch(error => {
    res.send(userInfo);
    console.log(error);
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

