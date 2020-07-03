import Link from 'next/link'
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'
import { useQuery } from '@apollo/client'

import { ALL_RESTAURANTS_QUERY } from './RestaurantListQuery'

interface Props {
  search: string
}

export default function RestaurantList({ search }: Props) {
  const { data, loading, error } = useQuery(ALL_RESTAURANTS_QUERY)

  if (error) return <h2>Error loading restaurants</h2>
  // if restaurants are returned from the GraphQL query, run the filter query
  // and set equal to variable restaurantSearch

  if (data && data.restaurants) {
    // searchQuery
    const searchQuery = data.restaurants.filter(query =>
      query.name.toLowerCase().includes(search)
    )
    if (searchQuery.length != 0) {
      return (
        <div>
          <div className='h-100'>
            {searchQuery.map(res => (
              <Card
                style={{ width: '30%', margin: '0 10px' }}
                className='card-columns'
                key={res.id}
              >
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className='card-footer'>
                  <Link
                    as={`/restaurants/${res.id}`}
                    href={`/restaurants?id=${res.id}`}
                  >
                    <a>
                      <Button color='primary'>View</Button>
                    </a>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </div>
      )
    } else {
      return <h2>No Restaurants Found</h2>
    }
  }
  return <h2>Loading</h2>
}
