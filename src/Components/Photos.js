import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Photos(props) {

    const arrOfMovies = 
  [
    {
      id:1,
      movie:"Akhanda",
      imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/4168/1104168-v-ba2198deb8fd",
      rating:5
    },
    {
      id:2,
      movie:"Bahubali",
      imageUrl:"https://pbs.twimg.com/media/C3E4OP0WEAAnCd2?format=jpg&name=900x900",
      rating:4
    },
    {
      id:3,
      movie:"RRR",
      imageUrl:"https://im.rediff.com/news/2021/dec/21rrr-movie-history4.jpg",
      rating:3
    },
    {
      id:4,
      movie:"Pushpa",
      imageUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",
      rating:3
    },
    {
        id:4,
        movie:"KGF",
        imageUrl:"https://www.themoviedb.org/t/p/w500/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
        rating:4
    },
    {
      id:5,
        movie:"Brahmastra",
        imageUrl:"https://m.media-amazon.com/images/M/MV5BZjY2MmI1ZWItNmU0Yy00NTdkLWJiYmQtNzFlZWNlMzkxZTZjXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_FMjpg_UX1000_.jpg",
        rating:1
    },
    {
      id:6,
      movie:"PSPK OG",
      imageUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioILXeB4i_v-G81QYNs79tEGqv4jaDxe-DNNmaeKV_cauoCBjZVXF69VQ6d7L_FeD01kJqXSrm4t4cDU7zgJJodKEMWZ3NOXsqVeUwGQDDEzWChMZ9xF_WYIzAc8D6fNG2ckU-F82fz5O086xg0YeFNeHtrex0Q-CUazEbnt8ZfXeqBFM4aT-BTKt2eg/s868/they%20call%20him%20og.JPG",
      rating:5
    },
    {
      id:7,
      movie:"Shutter Island",
      imageUrl:"https://d1hwmph06ue357.cloudfront.net/new_test/wp-content/uploads/2022/05/Shutter-Island1.jpg",
      rating:5
    },
    {
      id:8,
      movie:"Shutter Island",
      imageUrl:"https://i.ebayimg.com/images/g/zu4AAOSw2spbJQ0J/s-l1600.jpg",
      rating:5
    },

  ];

  const [movies,setMovies] = useState(arrOfMovies);

  const hadleTopRating = () => {
    const topMovies = arrOfMovies.sort((x, y) => (x.rating < y.rating) ? 1 : (x.rating > y.rating) ? -1 : 0);
    console.log(topMovies);
        console.log("clicked on top movies");
        setMovies(topMovies);
        setMovies([...arrOfMovies]);
    }

    // const handleOnSubmit = () => {
    //   const search = arrOfMovies.filter(x => x.movie).includes(searched);
    //   setMovies(search);
    //   setMovies([...arrOfMovies]);
    // }

    const handleLowRating = () => {
        const lowMovies = arrOfMovies.sort((x,y) => (x.rating < y.rating) ? -1 : (x.rating > y.rating) ? 1 : 0);
        console.log("clicked on low movies");
        setMovies(lowMovies);
        setMovies([...arrOfMovies]);
    }

    const handleAllRated = () => {
      console.log("clicked on All movies");
        setMovies([...arrOfMovies]);
    }

  return (
    <div>
      <div className="dropdown ">
        <button className="btn btn-secondary dropdown-toggle bg-dark float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
        </button>
        <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={handleAllRated} href="/" >All</button></li>
            <li><button className="dropdown-item " onClick={hadleTopRating} href="/">Top Rated</button></li>
            <li><button className="dropdown-item" onClick={handleLowRating} href="/" >Low Rated</button></li>
        </ul>
       </div>
    <div className='container my-3'>
    <h2 className=' text-center main-heading'> List of Movies </h2>
    <hr/>
    <div className='row'>
          {
                movies.map((item,pos) => {
                    return(
                        <div className='col-md-3' key={pos}>
                        <div className="card bg-secondary my-3" style={{width: "18rem"}}>
            <img src={item.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark">
                <h4 className="card-title text-secondary-emphasis text-center">{item.movie}<hr/>
                <p ><Rating name="size-small" initialValue={item.rating} /></p>
                </h4>
            </div>
            </div>
            </div>
                    )
                })
}
        </div> 
    </div>
    
    </div>
  )
}