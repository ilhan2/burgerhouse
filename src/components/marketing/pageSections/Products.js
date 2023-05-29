import React from 'react'
import Container from '../../elements/Container'
import HeadingsTitles from '../../elements/DisplayTitles/HeadingsTitles'
import Heading from '../../elements/DisplayTitles/Heading'
import Image1 from '../../../medias/images/products/Product-1.jpg'
import Image2 from '../../../medias/images/products/Product-2.jpg'
import Image3 from '../../../medias/images/products/Product-3.jpg'
import Button from '../../elements/Button'


export default function Products() {
  return (
    <Container>
        <HeadingsTitles>
            Toujours des délicieux burgers
        </HeadingsTitles>
        <Heading theme="secondary" alignement="center" className="my-5">
            Choisissez et savourez
        </Heading>
        <p className='text-center'>
        ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel
        </p>
        <div className='grid grid-cols-3 gap-x-1 mb-20 mt-10'>
            <div className='w-full h-full'>
                <div className='relative h-72 w-full'>
                    <img src={Image1} alt='Un autre délicieux burger' className='absolute top-0 left-0 h-full w-full object-cover z-0'/>
                </div>
                <div className='flex flex-col items-center justify-center px-5 pb-5'>
                    <Heading variant="h3" className="my-5">
                        Lorem ipsum dolor
                    </Heading>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adisciping elit, set do
                    </p>
                    <Button color="danger" className="font-secondary">
                        Commandez
                    </Button>
                </div>
            </div>
            <div className='w-full h-full'>
                <div className='relative h-72 w-full'>
                    <img src={Image2} alt='Un autre délicieux burger' className='absolute top-0 left-0 h-full w-full object-cover'/>
                </div>
                <div className='flex flex-col justify-center items-center px-5 pb-5'>
                    <Heading variant="h3" className="my-5">
                        Lorem ipsum dolor
                    </Heading>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adisciping elit, set do
                    </p>
                    <Button color="danger" className="font-secondary">
                        Commandez
                    </Button>
                </div>
            </div>
            <div className='w-full h-full'>
                <div className='relative h-72 w-full'>
                    <img src={Image3} alt='Un autre délicieux burger' className='absolute top-0 left-0 h-full w-full object-cover'/>
                </div>
                <div className='flex flex-col items-center justify-center px-5 pb-5'>
                    <Heading variant="h3" className="my-5">
                        Lorem ipsum dolor
                    </Heading>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adisciping elit, set do
                    </p>
                    <Button color="danger" className="font-secondary">
                        Commandez
                    </Button>
                </div>
            </div>
        </div>
    </Container>
  )
}
