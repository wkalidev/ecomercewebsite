import "./about.css";
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
        <div className="a-left">
           <div className="a-card bg"></div>
           <div className="a-card">
               <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/redeem-team-north-carolina-finishes-the-job-one-year-later-april-10-2017-sports-illustrated-cover.jpg" 
               alt="" 
               className="a-img" 
               />
            </div> 
        </div>
          <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
              It is a long established fact that a reader will be distracted 
              by the readable content.    
            </p>  <br />
            <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do 
            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, 
            nisi ut aliquid ex ea commodi consequatu duis aute dolor in reprehende.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                 <h4 className="a-award-title">
                  International Design Award 2022
                </h4> 
                <p className="a-award-desc">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and fugit.
                </p>  
                </div>
            </div>
          </div>
        </div>
    );
};

export default About;
