import React from 'react'
import Card from '../Card/Card';
import { Row, Col } from 'react-bootstrap'
import '../Pagination/Posts.css'


const Posts = ({ posts, loading }) => {

    if (loading) {
        return (
            <>
                <div className="loader"></div>
            </>
        )
    }

    return (
        <Row>
            {posts.map(item => (
                <Col
                    key={item.id}
                    lg={3}
                    md={6}
                    sm={12}
                    className="mt-4 mb-5 pl-0 pr-0"
                >
                    <Card item={item} />
                </Col>
            ))}
        </Row>
    )

}

export default Posts;