import { Link, Container, Header, List } from 'components/styled'
import { Outlet } from 'react-router-dom'
import { Suspense } from "react";
import "../styles.css"

const SharedLayout = () => {
    return <Container>
        <Header>
            <List>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </List>
        </Header>
        <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
        </Suspense>
    </Container>
};

export default SharedLayout