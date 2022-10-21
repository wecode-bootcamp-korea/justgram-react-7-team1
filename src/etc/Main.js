import './Main.scss';
import { Nav, Feed } from '../../Components'
import React, { useEffect, useState } from 'react';

function Main() { 
  return (
    <>
      <Nav />
      <Feed writer={"gangjeong_kim"} profileImage={"/images/gangjeong_main.png"}ImageURL={"/images/cat.jpg"} feedContent={"김갱정 귀엽네 근데 간식은 안줘"}/>
      <Feed writer={"cat_MinA"} profileImage={"/images/mina.png"} ImageURL={"/images/minaphoto.png"} feedContent={"엉아 나는 넥카라가 불편하지않아...괜차나 난"}/>
      <Feed writer={"noroo_joy"} profileImage={"/images/deerprofile.png"} ImageURL={"/images/deerphoto.png"} feedContent={"사람들은 날 노루라고 부르지"}/>     
    </>
    );
}

export default Main;