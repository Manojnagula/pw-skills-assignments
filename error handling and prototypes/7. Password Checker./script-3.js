class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return this._password.replace(/./g, '*');
  }

  set password(newPassword) {
    if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
      console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      return;
    }
    this._password = newPassword;
  }
}
const user = new User('john', 'password');
console.log(user.password); // Output: ********

user.password = 'newpassword';
console.log(user.password); // Output: ********

user.password = 'weak';
// Output: Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.
console.log(user.password); // Output: ********
