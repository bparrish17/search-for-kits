import { Kit } from './models';

export default class KitService {
  
  public getKitById(id: number): Promise<Kit> {
    return fetch(`/api/kits/${id}`).then((res) => res.json())
  }

  public searchKitsByLabelId(labelId: string = ''): Promise<Kit[]> {
    return fetch(`/api/kits/search?labelId=${labelId}`).then((res) => res.json())
  }
}
