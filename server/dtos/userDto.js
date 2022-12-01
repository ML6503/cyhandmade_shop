module.exports = class UserDto {
  id;
  email;
  name;
  isActivated;
  role;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.name = model.name;
    this.isActivated = model.isActivated;
    this.role = model.role;
  }
};
