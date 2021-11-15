import React, { useState, useEffect } from 'react'


//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL }from '../config'

//components


//hook
import { useHomeFetch } from '../hooks/useHomeFetch'

//Image
import NoImage from '../images/no_image.jpg'

function Home() {

    const { state, loading, error } = useHomeFetch();

    console.log(state);

    return (
        <div>
            Home page
        </div>
    )
}

export default Home
