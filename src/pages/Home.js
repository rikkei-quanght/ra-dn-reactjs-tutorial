import ProductList from '../components/product/ProductList'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container>
            <Link to="/cart" className="float-end">
                <Button variant="warning">Giỏ hàng</Button>
            </Link>
            <h2 className="text-center">Danh sách sản phẩm</h2>
            <ProductList />
        </Container>
    )
}

export default Home
