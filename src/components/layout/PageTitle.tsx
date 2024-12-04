interface PageTitleProps {
  children: React.ReactNode
}

export const PageTitle = ({children}: PageTitleProps) => (
  <div className='flex w-full items-center justify-center px-4 py-8'>
    <h1 className='prose prose-2xl mx-auto max-w-3xl text-center font-bold text-primary'>
      {children}
    </h1>
  </div>
)

export default PageTitle
