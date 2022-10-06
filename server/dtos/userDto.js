module.exports = class UserDto {
  id;
  email;
  isActivated;
  role;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
    this.role = model.role;
  }
}