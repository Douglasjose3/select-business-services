import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './myAccordion.css';
import { useState } from 'react';

function MyAccordion() {
    useState(() => {
        Aos.init();
    }, [])

return (
    <Container>
        <h3 className='sub-title' data-aos="fade-right">Doubts</h3>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header><h4 className='doubts'>Dúvidas 1</h4></Accordion.Header>
                <Accordion.Body>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic doloremque quidem. Dolorem quaerat voluptatem doloremque dolores asperiores quasi, commodi sint reiciendis exercitationem possimus, earum libero qui reprehenderit nostrum natus!
                </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header><h4 className='doubts'>Dúvidas 2</h4></Accordion.Header>
                <Accordion.Body>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem culpa corporis eius itaque ea possimus illo ipsam, animi nesciunt et est eum odio soluta ex quis nulla labore voluptatibus?
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header><h4 className='doubts'>Dúvidas 3</h4></Accordion.Header>
                <Accordion.Body>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde totam dolor natus voluptates quam placeat! Atque accusantium ea, incidunt exercitationem cum adipisci doloremque possimus quaerat! Excepturi assumenda veritatis rerum atque.
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header><h4 className='doubts'>Dúvidas 4</h4></Accordion.Header>
                <Accordion.Body>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate inventore consequuntur beatae aliquid quisquam eum consequatur officia, nesciunt perferendis nam temporibus asperiores earum dignissimos, corrupti aspernatur voluptatum illo commodi repellat!
                    </p>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    </Container>
);
}

export default MyAccordion;