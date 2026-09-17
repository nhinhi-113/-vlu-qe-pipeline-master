function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Username rỗng
    if (username === "") {
        return false;
    }

    // Mật khẩu chứa ký tự đặc biệt
    if (password.includes("@") || password.includes("#") || password.includes("$")) {
        return false;
    }

    // Kiểm tra tài khoản và mật khẩu
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = login;
