const login = require("./auth");

test("Sai mật khẩu", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "123@")).toBe(false);
});

test("Tài khoản bị khóa", () => {
    expect(login("locked", "123")).toBe(false);
});

test("Sai username", () => {
    expect(login("user", "123")).toBe(false);
});

test("Username và password đều sai", () => {
    expect(login("user", "456")).toBe(false);
});
