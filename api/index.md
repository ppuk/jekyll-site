---
layout: blank
---

# [pirateparty.org.uk]({{'/' | relative_url}})/api

Accessible is::

- sitemap: [sitemap.xml]({{'/sitemap.xml' | relative_url}})
- news: [api/posts.json]({{ '/api/posts.json' | relative_url}})
- program: [api/program.json]({{'/api/program.json' | relative_url}})
- tags [api/tags.json]({{'/api/tags.json' | relative_url}})
- stručný obsah [ api/search.json]({{'/api/search.json' | relative_url}})

## Access

**JavaScript**:

```javascript
$.get('/api/search.json')
    .done(function(data) {
        console.log('Success:');
        console.log(data);
    })
    .fail(function(data) {
        console.log('Error:');
        console.log(data);
    });
});
```

**Python 3**:

```python
from urllib.request import urlopen
from json import loads

url = 'http://localhost:4000/api/search.json'

response = urlopen(url)
text = response.read().decode("utf-8")
var = loads(text)
```
