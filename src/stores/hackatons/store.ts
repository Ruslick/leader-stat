import { makeAutoObservable, reaction, runInAction } from "mobx";
import { HackatonDTO } from "../../shared/types/hackaton";
import { api } from "../../shared/api/auth";
import { Paginated } from "../../shared/types/general";
import { API } from "../../shared/api/constants";
import { notify } from "../notifications";
import { HackatonsFiltersStore } from "./filtersStore";

class Hackatons {
  private _hackatons?: HackatonDTO[];

  public filtersStore = new HackatonsFiltersStore();

  private isLoading = false;

  get hackatons() {
    return this._hackatons;
  }

  public disposer?: VoidFunction

  constructor() {
    makeAutoObservable(this);
    this.disposer = reaction(
      () => this.filtersStore.filters,
      () => this.hackatonsRequest()
    )
  }

  hackatonsRequest = async () => {
    if (this.isLoading) return this._hackatons;
    try {
      this.isLoading = true;
      const response = await api.get<Paginated<HackatonDTO[]>>(API.GET_HACKATONS, {
        params: this.filtersStore.filters,
      });
      runInAction(() => {
        this._hackatons = response.data.results;
      });
    } catch (error) {
      notify.error({ title: "Ошибка", message: "Не удалось загрузить данные хакатонов" });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
    return this._hackatons;
  };
}

export const hackatonsStore = new Hackatons();
