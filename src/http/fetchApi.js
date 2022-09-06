import baseHttp from './baseFetch';

export const getHttp = async (url, options, type ='json') => (await baseHttp(url, 'get', options))(type);

export const postHttp = async (url,body, options, type ='json') => (await baseHttp(url, 'post', { body, ...options,}))(type);

export const putHttp = async (url,body, options, type ='json') => (await baseHttp(url,'put', {body,...options,}))(type);

export const patchHttp = async (url, body, options, type ='json') => (await baseHttp(url,'patch', {body, ...options,}))(type); 

export const updateHttp = async (url, body, options, type ='json') => (await baseHttp(url,'update', {body,...options, }))(type); 

export const deleteHttp = async (url, body, options, type ='json') => (await baseHttp(url,'delete', {body, ...options,}))(type); 