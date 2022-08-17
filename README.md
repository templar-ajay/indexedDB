# IndexedDB

## Open a database

`const request = indexedDB.open(dbName,dbVersion)`

## events

    - onupgradeneeded
    - onerror
    - onsuccess

```js
request.onupgradeneeded = (e) => {};
request.error = (e) => {};
request.success = (e) => console.log(`error ! ${e.target.error}`);
```

- access database in `onupgradeneeded` event or the `success` event using
  `event.target.result`

ex-

```js
request.success = (event) => console.log("db", event.target.result);
//or
request.onupgradeneeded = (e) => console.log("db", e.target.result);
//or
request.success = (event) => console.log("db", request.result); // here event is success , target is request)
```
