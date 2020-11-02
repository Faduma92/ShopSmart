import React from 'react';
import { Card, Button} from 'react-bootstrap';


function Newsletter() {
    return (

    <div>


<Card>
<Card.Body>
    <Card.Title>Get our latest deals and promotions</Card.Title>
    <Card.Text>
      Subscribe to our newsletter
    </Card.Text>
    <form action="#">
                        <input type="email" placeholder="Your email here"></input>
                      
                    </form>
    <Button variant="primary">Subscribe</Button>
  </Card.Body>
</Card>

</div>
    )
}


export default Newsletter;