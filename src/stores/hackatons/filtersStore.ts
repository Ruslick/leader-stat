import { api } from "@src/shared/api/auth";
import { API } from "@src/shared/api/constants";
import { FiltersNames, LocationsDTO } from "@src/shared/types/hackaton";
import { makeAutoObservable, runInAction } from "mobx";

export class HackatonsFiltersStore<TName extends string = FiltersNames> {
  private _filters: Partial<Record<TName, string>> = {};

  public locations: string[] = [];

  get filters() {
    // hack
    return new URLSearchParams(this._filters as Record<string, string>);
  }

  constructor() {
    makeAutoObservable(this);
    this.locationsRequest();
  }

  locationsRequest = async () => {
    const response = await api.get<LocationsDTO>(API.GET_LOCATIONS);
    runInAction(() => {
      this.locations = response.data.result;
    });
  };

  toggleFilter = (key: TName, value: string) => {
    if (this.filters.getAll(key).includes(value)) {
      delete this._filters[key];
    } else {
      this._filters[key] = value;
    }
  };

  setFilter = (key: TName, value: string) => {
    if (value === "") {
      delete this._filters[key];
    }
    this._filters[key] = value;
  }

  getIsFilterActive = (key: TName, value: string) => this.filters.getAll(key).includes(value);
}
