import { Button, Alert } from 'reactstrap'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Alert color='primary'>Hello Project is strapi-next with Bootstrap</Alert>
      &nbsp; <Button color='primary'>Hello from Next.js</Button>
    </Layout>
  )
}
