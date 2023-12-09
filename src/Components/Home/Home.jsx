import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

import {BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai";

const api_key = "0352fd298de05732316e40ef889d8e3f";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated"

const imgUrl = "https://image.tmdb.org/t/p/original"
const Card = ({ img }) => <img src={img} alt="cover" className="card" />;

const Row = ({
  title,
  arr = [
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => {
        return <Card img={`${imgUrl}/${item.poster_path}`} key={index} />;
      })}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcoming] = useState([])
  const [nowPlayingMovies, setNowPlaying] = useState([])
  const [popularMovies, setPopular] = useState([])
  const [topRatedMovies, setTopRated] = useState([])


  useEffect(() => {
    const fetchUpcoming = async () => {
     
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/${upcoming}?api_key=${api_key}&language=en-US&page=2`
      );
      setUpcoming(results)
    };



    const fetchNowPlaying = async () => {

      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/${nowPlaying}?api_key=${api_key}&language=en-US&page=5`
      );
      setNowPlaying(results)
    };




    const fetchPopular = async () => {

      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/${popular}?api_key=${api_key}&language=en-US&page=1`
      );
      setPopular(results)
    };




    const fetchTopRated = async () => {
    
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/${topRated}?api_key=${api_key}&language=en-US&page=1`
      );
      setTopRated(results)
    };

    fetchUpcoming()
    fetchNowPlaying()
    fetchPopular()
    fetchTopRated()
  }, []);

  return (
    <section className="home">
      <div className="banner" style={{
        backgroundImage : popularMovies[0] ? `url(${imgUrl}/${popularMovies[0].poster_path})` : "none"
      }}>
      {<h1>{popularMovies[0] && popularMovies[0].original_title}</h1>}
      {<p>{popularMovies[0]&&popularMovies[0].overview}</p>}
      <div>
      <button>Play <BiPlay/></button>
      <button>My List <AiOutlinePlus/> </button>
      </div>

      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
    </section>
  );
};

export default Home;
