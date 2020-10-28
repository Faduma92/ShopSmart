import logo from './logo.svg';
import './App.css';
import { Button, Card, CardText, Layout, Header, Navigation, Drawer, Content, Textfield} from 'react-mdl';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Shop Smart">
        <Navigation>
                <a href="#">Electronics</a>
                <a href="#">Health and Wellness</a>
                <a href="#">Beauty and Cosmetics</a>
                <a href="#">Log In</a>
                <a href="#">Sign Up</a>
                <a href="#">Cart Logo</a>
            </Navigation>
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Header>
   

        <Drawer>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );
}

export default App;
