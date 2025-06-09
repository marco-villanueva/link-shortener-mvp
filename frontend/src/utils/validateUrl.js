export const validateUrl = (url) => {
  const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:[0-9]{1,5})?(\/.*)?$/i;
  return regex.test(url);
};
