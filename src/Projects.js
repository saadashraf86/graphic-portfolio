import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component

import header from './works/header.png';

import allegory from './works/allegory.jpg';
import baba from './works/baba.jpg';
import baltra from './works/baltra.png';
import biryani from './works/biryani.jpg';
import burghain3 from './works/burghain3.JPG';
import burghain4 from './works/burghain4.jpg';
import burghain5 from './works/burghain5.jpg';
import djboring from './works/djboring.jpg';
import djseinfeld from './works/djseinfeld.jpg';
import dmvdeep1 from './works/dmvdeep1.jpg';
import dmvdeep3 from './works/dmvdeep3.jpg';
import dmvdeep4 from './works/dmvdeep4.jpg';
import dmvdeep4_black from './works/dmvdeep4_black.jpg';
import dmvdeep5 from './works/dmvdeep5.jpg';
import eclairfifi from './works/eclairfifi.jpg';
import jacquesgreene from './works/jacquesgreene.png';
import kerri from './works/kerri.jpg';
import magician from './works/magician.jpg';
import minitour from './works/minitour.jpg';
import mystery1 from './works/mysteryposter3_1.jpg';
import mystery2 from './works/mysteryposter3_2.jpg';
import mystery3 from './works/mysteryposter3_3.jpg';
import playboi from './works/playboi.jpg';
import pttrns from './works/pttrnsedit.jpg';
import r5 from './works/r5.jpg';
import residency from './works/residency.jpg';
import roam from './works/roam.jpg';
import scenekids1 from './works/scenekids1.jpg';
import scenekids2 from './works/scenekids2.jpg';
import softgrunge1 from './works/softgrunge1.jpg';
import softgrunge2 from './works/softgrunge2.jpg';
import softgrunge3 from './works/softgrunge3.jpg';
import soma from './works/soma.jpg';
import sonar from './works/sonar.jpg';
import thedream from './works/thedream.jpg';
import thisistheend from './works/thisistheend.jpg';
import uhell from './works/uhell.jpg';

import Zoom from 'react-reveal/Zoom';

import './App.css';

function Projects(props) {
    return (

        <div><div className="header">
            <img src={header} />
        </div>
            <Zoom><Thumbnail
                image={jacquesgreene}
            /></Zoom>
            <Zoom><Thumbnail
                image={scenekids2}
            /></Zoom>
            <Zoom><Thumbnail
                image={thisistheend}
            /></Zoom>

            <Zoom><Thumbnail
                image={pttrns}
            /></Zoom>
            <Zoom><Thumbnail
                image={mystery1}
            /></Zoom>
            <Zoom><Thumbnail
                image={mystery2}
            /></Zoom>
            <Zoom><Thumbnail
                image={mystery3}
            /></Zoom>
            <Zoom><Thumbnail
                image={baltra}
            /></Zoom>
            <Zoom><Thumbnail
                image={sonar}
            /></Zoom>
            <Zoom><Thumbnail
                image={biryani}
            /></Zoom>
            <Zoom><Thumbnail
                image={r5}
            /></Zoom>
            <Zoom><Thumbnail
                image={dmvdeep5}
            /></Zoom>

            <Zoom><Thumbnail
                image={magician}
            /></Zoom>

            <Zoom><Thumbnail
                image={burghain5}
            /></Zoom>
            <Zoom><Thumbnail
                image={dmvdeep4_black}
            /></Zoom>
            <Zoom><Thumbnail
                image={dmvdeep4}
            /></Zoom>
            <Zoom><Thumbnail
                image={softgrunge1}
            /></Zoom>
            <Zoom><Thumbnail
                image={softgrunge2}
            /></Zoom>
            <Zoom><Thumbnail
                image={softgrunge3}
            /></Zoom>
            <Zoom><Thumbnail
                image={allegory}
            /></Zoom>
            <Zoom><Thumbnail
                image={djboring}
            /></Zoom>
            <Zoom><Thumbnail
                image={minitour}
            /></Zoom>
            <Zoom><Thumbnail
                image={playboi}
            /></Zoom>
            <Zoom><Thumbnail
                image={thedream}
            /></Zoom>
            <Zoom><Thumbnail
                image={djseinfeld}
            /></Zoom>
            <Zoom><Thumbnail
                image={kerri}
            /></Zoom>
            <Zoom><Thumbnail
                image={eclairfifi}
            /></Zoom>
            <Zoom><Thumbnail
                image={roam}
            /></Zoom>
            <Zoom><Thumbnail
                image={baba}
            /></Zoom>
            <Zoom><Thumbnail
                image={scenekids1}
            /></Zoom>
            <Zoom><Thumbnail
                image={dmvdeep3}
            /></Zoom>
            <Zoom><Thumbnail
                image={burghain4}
            /></Zoom>
            <Zoom><Thumbnail
                image={uhell}
            /></Zoom>
            <Zoom><Thumbnail
                image={dmvdeep1}
            /></Zoom>
            <Zoom><Thumbnail
                image={burghain3}
            /></Zoom>
            <Zoom><Thumbnail
                image={residency}
            /></Zoom>

            <Zoom><Thumbnail
                image={soma}
            /></Zoom>
        </div >
    )
}

export default Projects;