import Head from 'next/head'
import Content from '../../components/Content'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import requests from '../../utils/requests'

// import axios from "axios";
// import {useRouter} from "next/router";
// import { Store } from "../../utils/Store";
// import { useContext, useEffect } from 'react'

import { server } from '../../config';


export const getServerSideProps = async (context)=>{
    const genre = context.query.genre;
    
    const request = await fetch(`${server}/api/getDiscover`,{method: "POST",body: JSON.stringify(requests[genre]?.url || requests.fetchTrending.url)})
    const {data} = await request.json()
    
    return {
      props:{
        data:data.results
      }
    }
}

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Next movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header/>

      {/* Navbar */}
      <Nav/>

      {/* content */}
      <Content data={data}/>
      
    </div>
  )
}

