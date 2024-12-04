import {Metadata} from 'next'
import {PrismicRichText, SliceZone} from '@prismicio/react'
import {createClient} from '@/prismicio'
import {components} from '@/slices'
import {PrismicNextImage, PrismicNextLink} from '@prismicio/next'
import {asText, PrismicDocument} from '@prismicio/client'
import type {
  ServicesPageDocument,
  ServicesPageDocumentDataServicesListItem,
  Simplify,
} from '../../../prismicio-types'
import type {ReactNode} from 'react'
import Grid from '@/components/layout/Grid'

const ServiceCard = (service: Simplify<ServicesPageDocumentDataServicesListItem>) => (
  <PrismicNextLink
    field={service.service_link}
    className='card w-full transform border-2 bg-base-100 bg-opacity-20 shadow-xl backdrop-blur-2xl transition-transform hover:scale-105'
    key={asText(service.service_title)}>
    <figure className='h-56 w-full'>
      <PrismicNextImage className='h-56 w-full object-cover' field={service.service_image} />
    </figure>
    <div className='prose card-body text-base'>
      <div className='card-title'>
        <PrismicRichText field={service.service_title} />
      </div>
      <PrismicRichText field={service.service_description} />
    </div>
  </PrismicNextLink>
)

export default async function Page() {
  const client = createClient()
  const page: ServicesPageDocument<string> = await client.getSingle('services_page')

  return (
    <div className='container mx-auto my-8 w-full'>
      {/* <PrismicNextImage field={page} /> */}
      <div className='prose prose-2xl max-w-6xl'>
        <PrismicRichText field={page.data.page_title} />
        <PrismicRichText field={page.data.introduction} />
      </div>
      <hr className='my-8 w-1/2 divide-y-2 divide-solid divide-primary' />

      <Grid>
        {page.data.services_list.map((service) => (
          <ServiceCard key={asText(service.service_title)} {...service} />
        ))}
      </Grid>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page: PrismicDocument = await client.getSingle('services_page')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
