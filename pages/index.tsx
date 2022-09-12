import { ReactElement } from 'react'
import Layout from '../components/page-structure/Layout'
import MainContent from '../components/page-structure/MainContent'

MainContent.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default MainContent
