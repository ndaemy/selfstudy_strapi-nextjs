import { useState } from 'react'
import { Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap'

import Layout from '../components/Layout'
import RestaurantList from '../components/RestaurantList'

export default function Home() {
  const [query, setQuery] = useState<string>('')

  function onChange(e) {
    setQuery(e.target.value.toLowerCase())
  }

  return (
    <div className='container-fluid'>
      <Row>
        <Col>
          <div className='search'>
            <InputGroup>
              <InputGroupAddon addonType='append'>Search</InputGroupAddon>
              <Input onChange={onChange} />
            </InputGroup>
          </div>
          <RestaurantList search={query} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  )
}
