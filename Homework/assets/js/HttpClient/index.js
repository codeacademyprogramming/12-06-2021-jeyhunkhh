export class HttpClient {
    baseUrl;

    constructor(url) {
        this.baseUrl = url
    }

    async get(url) {
        return fetch(`${this.baseUrl}/${url}`).then(response => response.json())
    }
}