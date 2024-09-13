export const navigate = (path: string, params?: { [key: string]: string }) => {
  if (params) {
    path += '?' + new URLSearchParams(params).toString();
  }
  window.location.hash = path;
};

export const getSearchParams = (names: string[]) => {
  const data = new URLSearchParams(window.location.hash.split('?')[1]);
  let obj: { [key: string]: any } = {};
  for (let name of names) {
    obj[name] = data.get(name);
  }
  return obj;
};
