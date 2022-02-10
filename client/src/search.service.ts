import { isEmpty } from 'lodash'
import { Kit, KitMap } from './models';
import KitJSONData from './data/KITS_SHIPPING_DATA.json'

export default class SearchService {
  public kitMap: KitMap = {};

  /**
   * Get Kit By ID
   * @param id : number
   * @returns {Promise<Kit>} : Promise resolving to found kit, if any
   * @description creates map of kits key'd by their IDs if not instantiated yet
   */
  public async getById(id: number): Promise<Kit> {
    if (isEmpty(this.kitMap)) {
      this.kitMap = await this._createKitMap()
    }
    return this.kitMap[id];
  }

  /**
   * Search Kits
   * @param query : string : query to search by
   * @returns {Promise<Kit[]>} : array of kits
   */
  public search(query: string): Promise<Kit[]> { 
    return this._fetchKitData()
      .then((kits: Kit[]) => {
        return kits.filter((kit) => kit.label_id.includes(query)) || []
      })
      .catch((err) => {
        console.warn('Error fetching Kits: ', err)
        return []
      })
  }

  /**
   * Converts array of kits to ID-accessible object
   * @returns {Promise<KitMap>} : Promise resolving to object key'd by Kit IDs
   */
  private _createKitMap(): Promise<KitMap> {
    return this._fetchKitData().then((kits: Kit[]) => {
      return kits.reduce((acc, kit) => {
        return { ...acc, [kit.id]: kit }
      }, {})
    })
  }

  /**
   * Fetches Kit Data from JSON
   * @returns {Promise<Kit[]>}
   * @description creates promise to mock API Call
   */
  private _fetchKitData(): Promise<Kit[]> {
    return new Promise((resolve) => {
      resolve(KitJSONData)
    })
  }
}
