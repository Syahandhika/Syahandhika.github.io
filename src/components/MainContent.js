import Hero from "./Hero";
import CardProject from "./CardProject";
import CardActivity from "./CardActivity";
import project1 from "./../assets/UI.jpg";
import project2 from "./../assets/draw.jpg";
import project3 from "./../assets/coding.jpg";
import activity1 from "./../assets/BEM.jpg";
import activity2 from "./../assets/ekobis.jpg";

const MainContent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>My Project</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-12">
            <CardProject image={project1} project="UI/UX Design Website" description="This project is driven by the vision to create a seamless and visually appealing interface." />
          </div>
          <div className="col-lg-4 col-12">
            <CardProject image={project2} project="Commision Art" description="I'am an artist passionate about transforming ideas and emotions into unique visual experiences." />
          </div>
          <div className="col-lg-4 col-12">
            <CardProject image={project3} project="Build Website" description="Creating a website with Bootstrap allows you to leverage a powerful front-end framework " />
          </div>
        </div>

        <div className="row">
            <div className="col-12 text-center my-5">
                <h1>My Activities</h1>
            </div>
            <div className="col-12">
                <CardActivity image={activity1} description="This is my internal activity on campus with BEM Kemakom FMIPA UPI"/>
            </div>
            <div className="col-12">
                <CardActivity image={activity2} description="This is my second activity on campus with the Kemakom Business Economics Division"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
