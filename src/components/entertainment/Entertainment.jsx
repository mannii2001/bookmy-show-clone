import React from "react";
import './entertainment.css';
import poster1 from '../../Assets/entertianment posters/poster1.jpg'
import poster2 from '../../Assets/entertianment posters/poster2.jpg'
import poster3 from '../../Assets/entertianment posters/poster3.jpg'
import poster4 from '../../Assets/entertianment posters/poster4.jpg'
import poster5 from '../../Assets/entertianment posters/poster5.jpg'


const Entertainment = () => {
  return (<div className="main_entertain">
    <h1 className="entertain_heading"><strong>The Best Of Entertainment</strong></h1>
    <div className="entertain_poster_container">
       
      <div className="entertain_poster">
        <img src={poster1} alt="" className="entertainPos"/>
      </div>
      <div className="entertain_poster">
        <img src={poster2} alt="" className="entertainPos"/>
      </div>
      <div className="entertain_poster">
        <img src={poster3} alt="" className="entertainPos"/>
      </div>
      <div className="entertain_poster">
        <img src={poster4} alt="" className="entertainPos"/>
      </div>
      <div className="entertain_poster">
        <img src={poster5} alt="" className="entertainPos"/>
      </div>
    </div>
    </div>
  );
};

export default Entertainment;
