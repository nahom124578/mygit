## Notice

* all backend requests such as `http://localhost:3001/api/something` now has been changed
to `/api/something` because axios's base default is set to `http://localhost:3001`.
* why? because when it is deployed the url will change and changing every request in each file
is difficult. 
* so, if you want to make a request to backend, just put on the relative url not the full url. 
ex. just put `/api/something` instead of `http://localhost:3001/api/something`