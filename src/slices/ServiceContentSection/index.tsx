import {Content} from '@prismicio/client'
import {PrismicNextImage} from '@prismicio/next'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'

// Common wrapper component for consistent layout
const SectionWrapper = ({
  children,
  bgClass = 'bg-base-100',
  slice,
}: {
  children: React.ReactNode
  bgClass?: string
  slice: Content.ServiceContentSectionSlice
}) => (
  <section
    className={`${bgClass} py-16 transition-colors duration-300 lg:py-24`}
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}>
    <div className='container mx-auto px-4 md:px-6'>{children}</div>
  </section>
)

// Common image component with consistent styling
const ContentImage = ({field}: {field: any}) => (
  <div className='overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]'>
    <PrismicNextImage field={field} className='aspect-[4/3] h-auto w-full object-cover' />
  </div>
)

export type ServiceContentSectionProps = SliceComponentProps<Content.ServiceContentSectionSlice>

const ServiceContentSection = ({slice}: ServiceContentSectionProps): JSX.Element => {
  const renderContent = (isInverted = false) => (
    <div
      className={`prose ${isInverted ? 'prose-invert' : ''} prose-lg max-w-none space-y-6 md:prose-xl`}>
      <PrismicRichText field={slice.primary.section_content} />
    </div>
  )

  switch (slice.variation) {
    case 'imageLeftLight':
      return (
        <SectionWrapper slice={slice}>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
            <div className='order-2 md:order-1'>
              <ContentImage field={slice.primary.sectionimage} />
            </div>
            <div className='order-1 md:order-2'>{renderContent()}</div>
          </div>
        </SectionWrapper>
      )

    case 'imageRightDark':
      return (
        <SectionWrapper slice={slice} bgClass='bg-base-300'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
            {renderContent(true)}
            <ContentImage field={slice.primary.sectionimage} />
          </div>
        </SectionWrapper>
      )

    case 'imageRightLight':
      return (
        <SectionWrapper slice={slice}>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
            {renderContent()}
            <ContentImage field={slice.primary.sectionimage} />
          </div>
        </SectionWrapper>
      )

    case 'imageLeftDark':
      return (
        <SectionWrapper slice={slice} bgClass='bg-base-300'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
            <ContentImage field={slice.primary.sectionimage} />
            {renderContent(true)}
          </div>
        </SectionWrapper>
      )

    case 'darkBackground':
      return (
        <SectionWrapper slice={slice} bgClass='bg-base-300'>
          <div className='mx-auto max-w-4xl'>
            <div className='mb-12 space-y-8 text-center'>
              <div className='prose prose-xl prose-invert mx-auto md:prose-2xl'>
                <PrismicRichText field={slice.primary.section_title} />
              </div>
            </div>
            <div className='grid grid-cols-1 gap-12'>{renderContent(true)}</div>
          </div>
        </SectionWrapper>
      )

    default:
      return (
        <SectionWrapper slice={slice} bgClass='bg-base'>
          <div className='mx-auto max-w-4xl'>
            <div className='mb-12 space-y-8 text-center'>
              <div className='prose prose-xl prose-invert mx-auto md:prose-2xl'>
                <PrismicRichText field={slice.primary.section_title} />
              </div>
            </div>
            <div className='grid grid-cols-1 gap-12'>{renderContent(true)}</div>
          </div>
        </SectionWrapper>
      )
  }
}

export default ServiceContentSection
