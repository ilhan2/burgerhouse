import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel'
import '../../../css/carousel.css'
import Image from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Image1 from '../../../medias/images/products/Product-1.jpg'
import Image2 from '../../../medias/images/products/Product-2.jpg'
import Heading from '../../elements/DisplayTitles/Heading'

const Slide = ({children, category, title, image}) => {
    return(
        <div className='grid grid-cols-2 p-6'>
            <div className='p-10 mb-10'>
                <Heading variant="h4">
                    {category}
                </Heading>
                <Heading theme="secondary" variant="h3" className="mb-5">
                    {title}
                </Heading>
                <p className='tracking-wide text-lg leading-relaxed font-light text-gray-800'>
                    {children}
                </p>
            </div>
            <div className='relative w-full h-full'>
                <img src={image} alt='une description du fabuleux evenement' className='absolute top-0 left-0 object-cover object-bottom z-0 w-full h-full bg-primary' />
            </div>
        </div>
    )
}

export default function Event() {

    const items = [
        <Slide
            image={Image}
            category="événement à venir"
            title="vivez la demi-finale"
        >
            mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius
        </Slide>,
        <Slide
            image={Image1}
            category="nouveau burger"
            title="venez le manger aujourd'hui"
        >
            mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius
        </Slide>,
        <Slide
            image={Image2}
            category="notre meilleur burger"
            title="à manger sans modération"
        >
            mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius
        </Slide>
    ];

  return (
    <Container>
        <div className='shadow-2xl mb-20'>
            <AliceCarousel
                mouseTracking 
                items={items} 
                autoPlay
                infinite
                autoPlayInterval={4000}
                disableButtonsControls
            />
        </div>
    </Container>
  )
}
