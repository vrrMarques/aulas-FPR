export const updateParameter = (uri = '/', key, value) => {
  const hasQueries = uri.includes('?');
  const hasHash = uri.includes('#');
  let hash = '';
  if (hasHash) {
    hash = uri.substr(uri.indexOf('#'));
    uri = uri.substr(0, uri.indexOf('#'));
  }

  let queries = '';
  if (hasQueries) {
    queries = uri.split('?');
    queries = queries[1];

    uri = uri.substr(0, uri.indexOf('?'));

    const parsedQueries = queries.split('&');
    const updatedQueries = [];

    let hasCurrentQuery;
    parsedQueries.forEach((parsedQuery) => {
      const [parsedKey, parsedValue] = parsedQuery.split('=');
      if (parsedKey === key) {
        if (value) {
          hasCurrentQuery = true;
          return updatedQueries.push(`${key}=${value}`);
        }
        return;
      }
      if (parsedValue) {
        updatedQueries.push(`${parsedKey}=${parsedValue}`);
      }
    });
    if (!hasCurrentQuery) {
      if (value) {
        updatedQueries.push(`${key}=${value}`);
      }
    }
    if (updatedQueries.length) {
      queries = '?' + updatedQueries.join('&');
    } else {
      queries = '';
    }
  } else {
    if (value) {
      queries = `?${key}=${value}`;
    }
  }

  return uri + queries + hash;
};

export const getParameter = (uri, key) => {
  const [, parametersAndHash] = uri.split('?');
  if (parametersAndHash) {
    const [parameters] = parametersAndHash.split('#');
    const parametersObject = {};
    parameters.split('&').forEach((parameter) => {
      const [currentKey, currentValue] = parameter.split('=');
      parametersObject[currentKey] = currentValue;
    });
    return parametersObject[key];
  }
  return null;
};
