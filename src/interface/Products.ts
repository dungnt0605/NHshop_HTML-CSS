export interface IProduct {
  _id?: number | string
  name?: string
  slug?: string
  image?: string
  description?: string
  price: number
  discount: number
  gallery?: String[]
  quantity?: number
  category?: string
  status?: string
  countInSlock?: number
  featured?: boolean
  tags?: string[]
}
