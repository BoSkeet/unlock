import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroupItem, ListGroup, Row, Col } from 'reactstrap'

const LockInList = (props) => {
  return (<ListGroupItem>
    <Link to={`/creator/lock/${props.lock}`}>
      {props.lock}
    </Link>
  </ListGroupItem>)
}

LockInList.propTypes = {
  lock: PropTypes.object
}

const Locks = (props) => {
  return (
    <Row>
      <Col>
        <h1>Locks</h1>
        <ListGroup>
          {[...props.locks].map((lock, idx) => {
            return (
              <LockInList lock={lock} key={idx} />
            )
          })}
        </ListGroup>
      </Col>
    </Row>
  )
}

Locks.propTypes = {
  locks: PropTypes.array
}

const mapStateToProps = state => {
  const locks = state.locks
  return {
    locks
  }
}

export default connect(mapStateToProps)(Locks)
