import {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {PrismicRichText, SliceZone} from '@prismicio/react'
import ParallaxContainer from '@/components/layout/ParallaxContainer'

import {createClient} from '@/prismicio'
import {components} from '@/slices'
import {PrismicNextImage} from '@prismicio/next'

type Params = {uid: string}

export default async function Page({params}: {params: Promise<Params>}) {
  const {uid} = await params
  const client = createClient()
  const page = await client.getByUID('service_detail_page', uid).catch(() => notFound())

  return (
    <div>
      <ParallaxContainer>
        <div className='relative h-[50vh] min-h-[400px]'>
          <PrismicNextImage
            className='absolute h-[120%] w-full object-cover'
            field={page.data.hero_image}
            priority
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
            <div className='container prose prose-2xl prose-invert text-primary'>
              <PrismicRichText field={page.data.service_title} />
            </div>
          </div>
        </div>
      </ParallaxContainer>
      <div className='container prose prose-2xl mx-auto my-8'>
        <PrismicRichText field={page.data.introduction} />
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export async function generateMetadata({params}: {params: Promise<Params>}): Promise<Metadata> {
  const {uid} = await params
  const client = createClient()
  const page = await client.getByUID('service_detail_page', uid).catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType('service_detail_page')

  return pages.map((page) => {
    return {uid: page.uid}
  })
}
