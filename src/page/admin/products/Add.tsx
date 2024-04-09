import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { IProduct } from '@/interface/Products'
import { AddProductsBy } from '@/services/product'
import { useMutation } from '@tanstack/react-query'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/components/ui/use-toast'

const productSchema = Joi.object({
  name: Joi.string().required(),
  slug: Joi.string(),
  price: Joi.number().required(),
  category: Joi.string(),
  // gallery: Joi.array().items(Joi.string()),
  image: Joi.string(),
  description: Joi.string(),
  countInSlock: Joi.number(),
  quantity: Joi.number(),
  discount: Joi.number(),
  featured: Joi.boolean()
})
const ProductAddPage = () => {
  const { toast } = useToast()

  const form = useForm({
    resolver: joiResolver(productSchema),
    defaultValues: {
      name: '',
      price: 0,
      category: '',
      image: '',
      // gallery: [],
      description: '',
      discount: 0,
      quantity: 0,
      countInSlock: 0,
      featured: false
    }
  })
  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await AddProductsBy(product)
      return data
    },
    onSuccess: () => {
      form.reset()
      toast({
        variant: 'success',
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM'
      })
    }
  })
  const onSubmit: SubmitHandler<IProduct> = (product) => {
    mutation.mutate(product)
  }
  return (
    <>
      <div className='mx-8'>
        <h2 className='text-5xl my-5 font-black text-center'>Thêm Sản Phẩm</h2>
        <div className='mx-8 flex justify-center items-center  '>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=' space-y-8 w-1/2 my-5  p-5 rounded-xl shadow-inner bg-[rgba(215,231,231,0.8)]'
            >
              <div className='grid grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                      <FormControl>
                        <Input placeholder='name' {...field} id='name' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='price'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='price'>Price</FormLabel>
                      <FormControl>
                        <Input {...field} id='price' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='category'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='category'>Category</FormLabel>
                      <FormControl>
                        <Input {...field} id='category' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='image'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='image'>Image</FormLabel>
                      <FormControl>
                        <Input {...field} id='image' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='description'>Description</FormLabel>
                      <FormControl>
                        <Input {...field} id='description' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='discount'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='discount'>Discount</FormLabel>
                      <FormControl>
                        <Input {...field} id='discount' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='quantity'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='quantity'>Quantity</FormLabel>
                      <FormControl>
                        <Input {...field} id='quantity' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='countInSlock'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='countInSlock'>CountInSlock</FormLabel>
                      <FormControl>
                        <Input {...field} id='countInSlock' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='featured'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                      <FormControl>
                        <Checkbox checked={field.value} className=' text-slate-100' onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Featured?</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type='submit' variant='destructive'>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ProductAddPage
