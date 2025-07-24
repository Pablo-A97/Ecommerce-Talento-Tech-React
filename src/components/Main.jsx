import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom';

function Main() {
    return (
        <main>
            <h2 className='tituloMain'>Los mejores componentes para tu PC</h2>
            <Carousel>
                <Carousel.Item>
                    <Image src="https://i.imgur.com/Pb289Qv.png" fluid />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://i.imgur.com/o1oQpmc.jpeg" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://i.imgur.com/BaRi7dF.png" fluid />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Image src="https://i.imgur.com/Bea07Mi.png" fluid style={{ margin: "2% 0" }} />
            <p className="parrafoMain">Mira nuestros <Link to="/productos" style={{ color: "red", textDecoration: "none" }}>PRODUCTOS</Link> destacados y aprovecha nuestras ofertas.</p>
            <Carousel style={{ margin: "2% 0" }}>
                <Carousel.Item className="text-center">
                    <Image src="https://i.imgur.com/MZVvTWh.jpeg" roundedCircle />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                    <Image src="https://i.imgur.com/34IFCCY.jpeg" roundedCircle />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                    <Image src="https://i.imgur.com/Gn7VYLc.jpeg" roundedCircle />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                    <Image src="https://i.imgur.com/7lbLC25.jpeg" roundedCircle />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                    <Image src="https://i.imgur.com/NfVZfD8.jpeg" roundedCircle />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                    <Image src="https://i.imgur.com/Nqj11md.jpeg" roundedCircle />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </main>
    );
}
export default Main; 