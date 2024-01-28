module.exports = function checkUrl(url) {
  const urlPattern = /((http(s)?):\/\/)?(www\.)?google\.com/;
  return urlPattern.test(url);
};
