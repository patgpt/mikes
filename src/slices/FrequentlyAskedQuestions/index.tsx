import {Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'

/**
 * Props for `FrequentlyAskedQuestions`.
 */
export type FrequentlyAskedQuestionsProps =
  SliceComponentProps<Content.FrequentlyAskedQuestionsSlice>

/**
 * Component for "FrequentlyAskedQuestions" Slices.
 */
const FrequentlyAskedQuestions = ({slice}: FrequentlyAskedQuestionsProps): JSX.Element => {
  return (
    <section
      className='container prose prose-2xl mx-auto mb-8'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.section_title} />
      {slice.primary.faqs.map((q, i) => (
        <div key={i} className='collapse collapse-arrow mb-4 bg-base-200 shadow-lg'>
          <input type='radio' name='my-accordion-2' defaultChecked />
          <div className='collapse-title text-xl font-medium'>
            <PrismicRichText field={q.question} />
          </div>
          <div className='collapse-content'>
            <PrismicRichText field={q.answer} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default FrequentlyAskedQuestions
