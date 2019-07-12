const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201904%2F20190418150724431.jpg',
          'name': '황민현',
          'birthday': '950809',
          'height': '181cm',
          'job': "NU'EST"
        },
        {
          'id': 2,
          'image': 'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201901%2F20190117122557308.jpg',
          'name': '옹성우',
          'birthday': '950824',
          'height': '179cm',
          'job': 'Actor'
        },
        {
          'id': 3,
          'image': '2w3https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F22%2F201712261720546481.jpg',
          'name': '이한결',
          'birthday': '991207',
          'height': '177cm',
          'job': 'IM'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));