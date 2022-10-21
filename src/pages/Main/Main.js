import './Main.scss';
import { Nav, Feed } from '../../Components'
import React, { useEffect, useState } from 'react';

function Main() { 

  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("/data/feeds.json")
    .then((res) => res.json())
    .then((data) => {
       setFeeds(data.feedData)
    })
  }, []);

  return (
     <> 
     <Nav /> 
     {feeds.map((feed) => {
      return <Feed key={feed.feedId} feedData={feed} />
     })}
     </>     
    );
}

export default Main;