import React from 'react';
import "./whatisGPT3.css";
import { Feature } from '../../components';
const WhatisGPT3 = () => {
  return (
    <div>
      <div className='gpt3__whatisGPT3 section__margin' id='wgpt3'>
          <div className='gpt3__whatisGPT3-feature'>
            <Feature title='What is GPT3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
          </div>

          <div className='gpt3__whatisGPT3-heading'>
            <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
            <p>Explore The Library</p>
          </div>

          <div className='gpt3__whatisGPT3-containers'>
            <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own'/>
            <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
            <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
          </div>
        </div>
      </div>
  );
}

export default WhatisGPT3