import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { IProduct } from '@/interface/Products'
import { Button } from '@/components/ui/button'
const ProductAddPage = () => {
  const form = useForm()

  const onSubmit = (product: IProduct) => {
    console.log(product)
  }
  return (
    <>
      <div className='mx-auto w-50'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} id='name' />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='price'>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} id='price' />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default ProductAddPage
