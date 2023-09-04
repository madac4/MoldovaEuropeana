export default async function fetchApi({
    endpoint,
    query = '',
    wrappedByKey = 'data',
    wrappedByList = false,
}) {
    if (endpoint.startsWith('/')) {
        endpoint = endpoint.slice(1);
    }

    const url = new URL(`http://localhost:1337/api/${endpoint}`);

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }
    
    const res = await fetch(url.toString());
    let data = await res.json();

    if (wrappedByKey) {
        data = data[wrappedByKey];
    }

    if (wrappedByList) {
        data = data[0];
    }

    return data;
}




