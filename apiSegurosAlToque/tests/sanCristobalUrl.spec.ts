import { joinSanCristobalUrl } from "../src/utils/sanCristobalUrl";

describe("joinSanCristobalUrl", () => {
  test("normaliza base con barra final y path con barra inicial", () => {
    expect(joinSanCristobalUrl("https://api.sancristobal.com.ar/", "/b2b-gateway/api/Quoted/QuoteCA7")).toBe(
      "https://api.sancristobal.com.ar/b2b-gateway/api/Quoted/QuoteCA7"
    );
  });
});
