import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Photos(props) {

    const arrOfMovies = 
  [
    {
      id:1,
      movie:"Akhanda",
      imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/4168/1104168-v-ba2198deb8fd",
      rating:3
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
      rating:4
    },
    {
      id:4,
      movie:"Pushpa",
      imageUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",
      rating:3
    },
    {
      id:5,
        movie:"Brahmastra",
        imageUrl:"https://m.media-amazon.com/images/M/MV5BZjY2MmI1ZWItNmU0Yy00NTdkLWJiYmQtNzFlZWNlMzkxZTZjXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_FMjpg_UX1000_.jpg",
        rating:2
    },
    {
      id:6,
      movie:"PSPK OG",
      imageUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioILXeB4i_v-G81QYNs79tEGqv4jaDxe-DNNmaeKV_cauoCBjZVXF69VQ6d7L_FeD01kJqXSrm4t4cDU7zgJJodKEMWZ3NOXsqVeUwGQDDEzWChMZ9xF_WYIzAc8D6fNG2ckU-F82fz5O086xg0YeFNeHtrex0Q-CUazEbnt8ZfXeqBFM4aT-BTKt2eg/s868/they%20call%20him%20og.JPG",
      rating:5
    },
    {
      id:7,
      movie:"Tholi Prema",
      imageUrl:"https://i.pinimg.com/originals/48/ef/5e/48ef5e641deadffae9e55d88e4296cdd.jpg",
      rating:5
    },
    {
      id:8,
      movie:"Thammudu",
      imageUrl:"https://m.media-amazon.com/images/M/MV5BNTY3MjM0ZWItOGRlYy00Y2Y4LTkxNWYtOWVkYWFjODNjNTRjXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_FMjpg_UX1000_.jpg",
      rating:5
    },
    {
      id:9,
      movie:"Shutter Island",
      imageUrl:"https://d1hwmph06ue357.cloudfront.net/new_test/wp-content/uploads/2022/05/Shutter-Island1.jpg",
      rating:5
    },
    {
      id:10,
      movie:"Interstellar",
      imageUrl:"https://i.ebayimg.com/images/g/zu4AAOSw2spbJQ0J/s-l1600.jpg",
      rating:5
    },
    {
      id:11,
      movie:"Liger",
      imageUrl:"https://pbs.twimg.com/media/FYBtRQCaQAAfT1u?format=jpg&name=900x900",
      rating:1
    },
    {
      id:12,
      movie:"Radhe Shyam",
      imageUrl:"https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/12/Radhe-1594550665.jpg",
      rating:1
    },
    {
      id:13,
      movie:"World famous lover",
      imageUrl:"https://www.deccanherald.com/sites/dh/files/article_images/2020/02/15/WFL2-1581756777.jpg",
      rating:1
    },
    {
      id:14,
      movie:"Joker",
      imageUrl:"https://assets.vogue.in/photos/5d7224d50ce95e0008696c55/master/pass/Joker.jpg",
      rating:5
    },
    {
      id:15,
      movie:"The Dark knight",
      imageUrl:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating:5
    },
    {
      id:16,
      movie:"Fight Club",
      imageUrl:"https://flxt.tmsimg.com/assets/p23069_p_v8_aa.jpg",
      rating:5
    },
    {
      id:17,
      movie:"Avengers Infinity War",
      imageUrl:"https://m.media-amazon.com/images/I/91fK1KIv66L._SX466_.jpg",
      rating:4
    },
    {
      id:18,
      movie:"KGF",
      imageUrl:"https://www.themoviedb.org/t/p/w500/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
      rating:4
    },
    {
      id:19,
      movie:"Zero",
      imageUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/zero-et00068462-01-01-2018-06-04-40.jpg",
      rating:1
    },
    {
      id:20,
      movie:"Thugs of Hindustan",
      imageUrl:"https://m.media-amazon.com/images/M/MV5BMTA3ODUxMzUzMzleQTJeQWpwZ15BbWU4MDMzMzkyNDYz._V1_.jpg",
      rating:1
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

    const fiveStarRating = () => {
      const fiveStars = arrOfMovies.filter(x => x.rating === 5);
      setMovies(fiveStars);
    }

    const fourStarRating = () => {
      const fourStars = arrOfMovies.filter(x => x.rating === 4);
      setMovies(fourStars);
    }

    const threeStarRating = () => {
      const threeStars = arrOfMovies.filter(x => x.rating === 3);
      setMovies(threeStars);
    }

    const twoStarRating = () => {
      const twoStars = arrOfMovies.filter(x => x.rating === 2);
      setMovies(twoStars);
    }

    const OneStarRating = () => {
      const oneStar = arrOfMovies.filter(x => x.rating === 1);
      setMovies(oneStar);
    }
  return (
    <div>
      <div className="dropdown ">
        <button className="btn btn-secondary dropdown-toggle bg-dark float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
        </button>
        <ul className="dropdown-menu small">
            <li><button className="dropdown-item " onClick={handleAllRated} href="/" >All</button></li>
            <li><button className="dropdown-item " onClick={hadleTopRating} href="/">Top Rated</button></li>
            <li><button className="dropdown-item" onClick={handleLowRating} href="/" >Low Rated</button></li>
        </ul>
       </div>
       <div className="dropdown ">
        <button className="btn btn-secondary dropdown-toggle bg-dark float-end me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By
        </button>
        <ul className="dropdown-menu small">
            <li><button className="dropdown-item" onClick={fiveStarRating} href="/" >5 STAR</button></li>
            <li><button className="dropdown-item " onClick={fourStarRating} href="/" >4 STAR</button></li>
            <li><button className="dropdown-item " onClick={threeStarRating} href="/">3 STAR</button></li>
            <li><button className="dropdown-item" onClick={twoStarRating} href="/" >2 STAR</button></li>
            <li><button className="dropdown-item" onClick={OneStarRating} href="/" >1 STAR</button></li>
        </ul>
       </div>
          <h2 className=' text-center main-heading text-ms-5'> List of Movies </h2>
          <hr/>
    <div className='container my-3'>
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