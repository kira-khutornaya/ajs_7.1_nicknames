export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUserName() {
    return !(/\d{4,}/.test(this.userName)) && /^[a-z][-\w]*[a-z]$/i.test(this.userName);
  }
}
