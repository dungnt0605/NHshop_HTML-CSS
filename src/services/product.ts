import instance from '@/config/axios'
import { IProduct } from '@/interface/Products.ts'

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await instance.get('/product')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getProductsById = async (slug: number | string) => {
  try {
    const response = await instance.get(`/product/${slug}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const AddProductsBy = async (product: IProduct) => {
  try {
    const response = await instance.post(`/product/`, product)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const EditProductsBy = async (product: IProduct) => {
  try {
    const response = await instance.put(`/product/${product._id}`, product)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
