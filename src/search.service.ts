import { Kit } from './models';
import Data from './data/KITS_SHIPPING_DATA.json'

export default class SearchService {

  /**
   * Search Kits
   * @param query : string : query to search by
   * @returns {Promise<Kit[]>} : array of kits
   */
  public search(query: string): Promise<Kit[]> { 
    return this.testCall()
      .then((kits: Kit[]) => {
        return kits.filter((kit) => kit.label_id.includes(query)) || []
      })
      .catch((err) => {
        console.warn('Error fetching Kits: ', err)
        return []
      })
  }

  private testCall(): Promise<Kit[]> {
    return new Promise((resolve) => {
      resolve(Data)
    })
  }
}
