import { makeAutoObservable } from 'mobx';
import { IType, IItem } from 'utils/interfaces';

export default class ItemStore {
  private _types: Array<IType> | [];
  private _items: Array<IItem> | [];
  public _selectedType: IType;
  private _page: number;

  constructor() {
    this._types = [
      { id: '29415d4d-9549-4786-83b6-0d3d7b8dc4c2', name: 'knives' },
      { id: '29435d4d-9549-4786-83b6-0d3d7b8dc4c2', name: 'hunting knives' },
      { id: '8d53885b-e462-4c3b-a6fb-23e3d0f0a93c', name: 'axes' },
      { id: '8v83885b-e462-4c3b-a6fb-23e3d0f0a93c', name: 'other creations' },
    ];

    this._items = [
      { id: '6f2e6b14-01c7-4f00-81b4-48629b7f60c9', name: 'Sipoko knife', price: 120, img: '' },
      {
        id: '2eebfb60-9a20-4c6d-a9e7-1d5f1117fcc8',
        name: 'Damascus steel knife',
        price: 180,
        img: '',
      },
      { id: 'f03a0f39-ba2f-4e6f-8fd5-8305f428ab4d', name: 'War axe', price: 1020, img: '' },
    ];
    const initialType = this._types.filter((t) => t.name === 'knives')[0];
    this._selectedType = initialType;
    this._page = 1;

    makeAutoObservable(this);
  }

  setSelectedType(type: IType) {
    this.setPage(1);
    this._selectedType = type;
  }

  setTypes(types: IType[]) {
    this._types = types;
  }

  setPage(page: number) {
    this._page = page;
  }

  get types() {
    return this._types;
  }

  get selectedType() {
    return this._selectedType;
  }

  setItem(item: IItem) {
    this._items = [...this._items, item];
  }

  setItems(items: IItem[]) {
    this._items = items;
  }

  get items() {
    return this._items;
  }
}
