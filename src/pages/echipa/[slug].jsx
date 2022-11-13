import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { tw } from 'twind'

const API = process.env.NEXT_PUBLIC_API
const SERVER = 'http://89.37.212.226:8000'


import Page from '@/components/page'
const Membru = (props) => {
    console.log(props)
    const imagePath = props.image.join('/')
    console.log(imagePath)
    const router = useRouter()
    const { slug } = router.query

// 
  return (
      <Page>
        <main className={tw('grid')}>

          <section className={tw('grid h-screen ')}>
              <div className={tw('relative bg-purple-200 rounded-full grid w-64 h-64 justify-self-center')} >
              <div className={tw('relative bg-purple-200 rounded-full grid w-64 h-64 justify-self-center')}>
                  <Image className={tw('bg-amber-200 rounded-full')} src={`${SERVER}/${imagePath}`}  objectFit={'cover'} layout={'fill'} />
              </div> 
                  <div className={tw('flex flex-col')}>
                      <span className={tw('m-3 text-2xl text-blue-900 font-bold text-center leading-5 text-base capitalize')}>{props.nume} {props.prenume}</span>
                      <span className={tw('m-1 text-blue-500 font-bold text-center leading-5 text-base capitalize')}>{props.functie}</span>
                      {/* <div className={tw('m-1 text-blue-500 font-bold text-center leading-5 text-base capitalize')}>{props.functie}</div> */}
                  </div>

            </div>
        </section>
            
          <section className={tw('grid w-3/6 mx-auto h-auto ')}>
                  <div className={tw('h-auto')} dangerouslySetInnerHTML={{__html: props.bio}}></div>
            </section>



     
  
  {/* {props.nume} */}
  </main>
    </Page>
  )
}

export default Membru




export async function getServerSideProps({ params }) {
    console.log(params.slug)
    const slug = params.slug
    // Call external API from here directly
    const response = await fetch(`${API}/${slug}`)
    const data = await response.json()

    return {
        props: { ... data }
    }
}