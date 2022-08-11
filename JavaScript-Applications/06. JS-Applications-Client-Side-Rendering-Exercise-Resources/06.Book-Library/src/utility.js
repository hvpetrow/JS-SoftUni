import { html, render } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/directives/until.js';

export {
    html, 
    render, 
    until
};

const host = 'http://localhost:3030/jsonstore/collections';

async function request(url, method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const response = await fetch(host + url, options);

    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    return  response.json();
}

export function getBooks() {
    return request('/books');
}

export function getBookById (id) {
    return request('/books' + id);
}

export function updateBook(id, book) {
    return request('/books' + id, 'put', book);
}

export function createBook (book) {
    return request('/books', 'post', book);
}

export function deleteBook(id) {
    return request('/books' + id, 'delete');
}