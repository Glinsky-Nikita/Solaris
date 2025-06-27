import React, { useState } from 'react';
import Image from 'react-image';
import { Link } from 'react-router-dom';
import CommentsList from './CommentsList';
import styles from "./page.module.css";
import Banner from './sub_components/Banner';
import { TracksSection } from './sub_components/TracksSection';
import VideoBlock from './sub_components/VideoBlock';
import { Actors } from "./sub_components/Actors";
import Description from './sub_components/Description'; 
import Translation from './sub_components/Translation'; 
import { FlipCard } from './sub_components/FlipCard';
import { NewsFeed } from './sub_components/NewsFeed';
import CardSection from './sub_components/CardSection';
import FooterSection from './sub_components/FooterSection';

function Main() {

  return (
    <div>
      <Banner />
      <VideoBlock /> 
      <Description />
      <Actors />
      <Translation />
      <TracksSection />
      <NewsFeed />
      <CardSection />
      <FlipCard />
      <FooterSection />
      <CommentsList />
    </div>
  );
}

  export default Main;