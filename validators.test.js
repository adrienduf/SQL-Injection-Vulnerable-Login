const {
  isValidUsername,
  passwordStrength,
  strengthLabel,
  formatDisplayName,
} = require("./validators");

describe("isValidUsername", () => {
  test("accepts a normal username", () => {
    expect(isValidUsername("adrien")).toBe(true);
  });

  test("rejects names that are too short", () => {
    expect(isValidUsername("ab")).toBe(false);
  });

  test("rejects values that are not strings", () => {
    expect(isValidUsername(42)).toBe(false);
  });
});

describe("passwordStrength", () => {
  test("scores a short lowercase password as weak", () => {
    expect(passwordStrength("abc")).toBe(0);
  });

  test("scores a long mixed password highly", () => {
    expect(passwordStrength("Sup3r-Secret-Passw0rd")).toBe(5);
  });
});

describe("strengthLabel", () => {
  test("labels a low score as weak", () => {
    expect(strengthLabel(0)).toBe("weak");
  });

  test("labels a high score as strong", () => {
    expect(strengthLabel(5)).toBe("strong");
  });
});

describe("formatDisplayName", () => {
  test("joins first and last name", () => {
    expect(formatDisplayName("Ada", "Lovelace")).toBe("Ada Lovelace");
  });
});
