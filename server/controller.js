const path = require('path')
const fs = require('fs')
const { isEmpty } = require('lodash')

class Controller {
  constructor() {
    this.kitMap = {};
    this.searchKits.bind(this)
    this.getKitById.bind(this)
    this.createKitMap.bind(this)
    this.fetchKitsFromJSON.bind(this)
  }

  /**
   * Search Kits
   * @param query : string : query to search by
   * @returns {Promise<Kit[]>} : array of kits
   */
  searchKits(req, res) {
    const labelId = req.query.labelId;
    this.fetchKitsFromJSON()
      .then((kits) => {
        const result = kits.filter((kit) => kit.label_id.includes(labelId)) || []
        res.status(200).send(result)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }

  /**
   * Get Kit By ID
   * @param id : number
   * @returns {Promise<Kit>} : Promise resolving to found kit, if any
   * @description creates map of kits key'd by their IDs if not instantiated yet
   */
  async getKitById(req, res) {
    const id = req.params.kitId;
    if (isEmpty(this.kitMap)) {
      this.kitMap = await this.createKitMap()
    }
    res.status(200).send(this.kitMap[id])
  }

  /**
   * Converts array of kits to ID-accessible object
   * @returns {Promise<KitMap>} : Promise resolving to object key'd by Kit IDs
   */
  createKitMap() {
    return this.fetchKitsFromJSON()
      .then((kits) => {
        return kits.reduce((acc, kit) => {
          return { ...acc, [kit.id]: kit }
        }, {})
      })
      .catch(() => ({}))
  }

  /**
   * Fetches Kit Data from JSON
   * @returns {Promise<Kit[]>}
   */
  fetchKitsFromJSON() {
    const kitsFilePath = path.join(__dirname, `data/KITS_SHIPPING_DATA.json`);
    return new Promise((resolve, reject) => {
      fs.readFile(kitsFilePath, 'utf8', (err, json) => {
        if (err) reject(err);
        else {
          try {
            const obj = JSON.parse(json);
            resolve(obj);
          } catch (e) {
            reject({ error: 'could not parse JSON file ' });
          }
        }
      });
    });
  }
}

module.exports = Controller
