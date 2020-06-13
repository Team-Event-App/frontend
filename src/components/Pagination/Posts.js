import React from 'react'
import Card from '../Card/Card';
import { Row, Col } from 'react-bootstrap'
import './Posts.css'


const Posts = ({ posts, loading }) => {

    if (loading) {
        return (
            <div class="loader"></div>
        )
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