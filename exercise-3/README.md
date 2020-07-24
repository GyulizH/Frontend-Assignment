## Exercise 3 - Render data
For this exercise a dummy API endpoint is available returning JSON data. The implementation uses [canned](https://github.com/sideshowcoder/canned). If you application is running then you can query the search endpoint. For example a user searching for search term `trui`:

```sh
curl -s http://localhost:3000/search\?q\=trui
```

If your application is not running, use the following command to start it:

```sh
yarn start
```

Create a service that retrieves the data from the above mentioned API. This data should be used to render the search suggestions. Search suggestions should be rendered according to the designs in excercise3.png. Pay attention to the following:

- Search suggestions are shown when a user interacts with the search input;
- Given a search query equal to or longer than 2 characters, then get the data;
- Given a valid input, then retrieve data;
- Given data is retrieved successfully, then present results in a list;
- Matching search query should be highlighted in results;
- Unit test for above scenario's (including a stub for the network request).
