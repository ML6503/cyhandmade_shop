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
      {
        id: '6f2e6b14-01c7-4f00-81b4-48629b7f60c9',
        name: 'Hunting knife',
        type: 'hunting knives',
        price: 100,
        img: 'https://scontent.fnic4-1.fna.fbcdn.net/v/t39.30808-6/319179117_2474572466025059_8981270551050010664_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4U4Iaazf43EAX_TKdcd&_nc_ht=scontent.fnic4-1.fna&oh=00_AfDEKrCq08rKYWQ3IMtVImtApTtNxf3lWVsqvbQY6l-RnQ&oe=63AFC670',
      },
      {
        id: '2eebfb60-9a20-4c6d-a9e7-1d5f1117fcc8',
        name: 'Dugger',
        type: 'knives',
        price: 150,
        img: 'https://scontent.fnic4-1.fna.fbcdn.net/v/t39.30808-6/310957616_532578525540366_6914824841310268856_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FT1S4RP461sAX_dQc1N&_nc_ht=scontent.fnic4-1.fna&oh=00_AfD-k7N3OMARW0Xb2hKB23qMjNgRv-96x_YalYINm006mA&oe=63AF3117',
      },
      {
        id: 'f03a0f39-ba2f-4e6f-8fd5-8305f428ab4d',
        name: 'Bowie knife',
        type: 'hunting knives',
        price: 120,
        img: 'https://scontent.fnic4-1.fna.fbcdn.net/v/t39.30808-6/316254205_567125888752296_3014713902278722567_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=smfUV2BrOu8AX9cIQtK&_nc_ht=scontent.fnic4-1.fna&oh=00_AfBDRGJ_P0wBQb7umpzfDtk6183zToYshq8PxTT242n9YQ&oe=63AF1FEA',
      },
      {
        id: '6f2e6b14-01c7-4f00-81b4-48629b7f60c9',
        name: 'Hunting knife',
        type: 'hunting knives',
        price: 100,
        img: 'https://scontent.fnic4-1.fna.fbcdn.net/v/t39.30808-6/319179117_2474572466025059_8981270551050010664_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4U4Iaazf43EAX_TKdcd&_nc_ht=scontent.fnic4-1.fna&oh=00_AfDEKrCq08rKYWQ3IMtVImtApTtNxf3lWVsqvbQY6l-RnQ&oe=63AFC670',
      },
      {
        id: '2eebfb60-9a20-4c6d-a9e7-1d5f1117fcc8',
        name: 'Dugger',
        type: 'knives',
        price: 150,
        img: 'https://scontent.fnic4-1.fna.fbcdn.net/v/t39.30808-6/310957616_532578525540366_6914824841310268856_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FT1S4RP461sAX_dQc1N&_nc_ht=scontent.fnic4-1.fna&oh=00_AfD-k7N3OMARW0Xb2hKB23qMjNgRv-96x_YalYINm006mA&oe=63AF3117',
      },
      {
        id: 'f03a0f39-ba2f-4e6f-8fd5-8305f428ab4d',
        name: 'Bowie knife',
        type: 'hunting knives',
        price: 120,
        img: 'https://scontent.fnic4-1.fna.fbcdn.net/v/t39.30808-6/316254205_567125888752296_3014713902278722567_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=smfUV2BrOu8AX9cIQtK&_nc_ht=scontent.fnic4-1.fna&oh=00_AfBDRGJ_P0wBQb7umpzfDtk6183zToYshq8PxTT242n9YQ&oe=63AF1FEA',
      },
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
