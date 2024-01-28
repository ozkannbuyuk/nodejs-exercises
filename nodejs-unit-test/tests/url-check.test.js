const urlCheck = require("../utils/url-check");

describe("URL Functions Tests", () => {
  it("should validate 'google.com'", () => {
    const result = urlCheck("google.com");
    expect(result).toEqual(true);
  });

  it("should validate 'www.google.com'", () => {
    const result = urlCheck("www.google.com");
    expect(result).toEqual(true);
  });

  it("should validate 'http://www.google.com'", () => {
    const result = urlCheck("http://www.google.com");
    expect(result).toEqual(true);
  });

  it("should validate 'https://www.google.com'", () => {
    const result = urlCheck("https://www.google.com");
    expect(result).toEqual(true);
  });
});
