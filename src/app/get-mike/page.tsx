import ContactForm from '@/components/forms/contact-form'
import {Container} from '@/components/layout/Container'
import Divider from '@/components/layout/Divider'
import PageTitle from '@/components/layout/PageTitle'

function Page() {
  return (
    <Container maxWidth='2xl'>
      <PageTitle>Get Mike</PageTitle>
      <h3 className='prose prose-xl mb-4 max-w-none text-balance text-center text-base-content'>
        Want to get in touch? Fill out the form below and I&apos;ll get back to you as soon as I
        can.
      </h3>
      <Divider />
      <ContactForm />
    </Container>
  )
}

export default Page
