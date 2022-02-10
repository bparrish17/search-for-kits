export interface Kit {
  id: number,
  label_id: string,
  shipping_tracking_code: string
}

export interface KitMap {
  [key: number]: Kit
}