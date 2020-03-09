import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ListItemSecondaryAction } from '@material-ui/core';
import '../../App.css'
import { connect } from 'react-redux';
import { getStocks, deleteStock } from '../../actions/itemActions';
import PropTypes from 'prop-types';

export class StockList extends Component {

    componentDidMount() {
        this.props.getStocks();
    }

    onDeleteClick = (id) => {
        this.props.deleteStock(id);
    }

    render() {
        const { stocks } = this.props.stock;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="stock-List">
                        {stocks.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {name}
                                    <Button
                                        className="delete-btn"
                                        color="danger"
                                        size="sm"
                                        type="button"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >Sell</Button>

                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container >
        );
    }
}

StockList.propTypes = {
    getStocks: PropTypes.func.isRequired,
    stock: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    stock: state.stock
});
export default connect(mapStateToProps, { getStocks, deleteStock })(StockList);
