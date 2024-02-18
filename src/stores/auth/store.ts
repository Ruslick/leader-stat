import { API } from "@src/shared/api/constants";
import { makeAutoObservable, runInAction } from "mobx";
import { api } from "../../shared/api/auth";
import { Jwt, SignInValues, SignUpValues } from "../../shared/types/auth/auth";
import { notify } from "../notifications";
import { localStorageObserver } from "./lib/localStorageObserver";

class Auth {
  public isAuth = !!localStorage.getItem("access");

  constructor() {
    makeAutoObservable(this);

    localStorageObserver();
    window.addEventListener("onStorageChange", () => {
      runInAction(() => {
        this.isAuth = !!localStorage.getItem("access");
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  login = async (values: SignInValues) => {
    try {
      api.post<Jwt>(API.TOKEN, values).then((response) => {
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
      });
      notify.success({ title: "Успешно", message: "Вы вошли в аккаунт" });
    } catch (error) {
      notify.error({ title: "Ошибка", message: "Неверный логин или пароль" });
    }
  };

  // eslint-disable-next-line class-methods-use-this
  register = async (values: SignUpValues) => {
    try {
      await api.post<Jwt>(API.USER_REGISTRATION, values)
      notify.success({ title: "Успешно", message: "Вы успешно зарегистрировались" });
    } catch (error) {
      notify.error({ title: "Ошибка", message: "Ошибка при регистрации" });
    }
  };

  // eslint-disable-next-line class-methods-use-this
  logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    notify.success({ title: "Успешно", message: "Выход выполнен" });
  };
}

export const auth = new Auth();
