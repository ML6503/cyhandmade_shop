import { makeAutoObservable } from 'mobx';

interface IUser {
  email: string;
  name: string;
  password: string;
}

export default class UserStore {
  _isAuth: boolean;
  _user: {} | IUser;
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: {} | IUser) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
