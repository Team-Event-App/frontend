import React from 'react'
import Card from '../Card/Card';
import { Row, Col } from 'react-bootstrap'


const Posts = ({ posts, loading }) => {

    if (loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <Row>
            {posts.map(data => (
                <Col
                    key={data.id}
                    lg={3}
                    md={6}
                    sm={12}
                    className="my-5 mt-5 pt-2 pl-0 pr-0"
                >
                    <Card item={data} />
                </Col>
            ))}
        </Row>
    )

}

export default Posts;