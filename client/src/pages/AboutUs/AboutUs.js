import aboutus from "./aboutus.jpg"

import "./AboutUs.css"

const AboutUs = () => {
    return (
        <section className="about">
        <h2 className="about__title">About us</h2>

        <div className="about__details">

        <div className="about__left">
                    <h3 className="about__mainlefttitle">Welcome to AirBlog </h3>
                    <p className="about__paragraph">Your ultimate destination for all things aviation and travel! We are passionate aviation enthusiasts who have come together to share our love for flying and exploring the world. Whether you're a seasoned frequent flyer or someone with a budding interest in aviation, our blog is here to inspire and inform.</p>

                
            </div>
            
            <div className="about__right">
                <img src={aboutus} alt="" className="about__image" />
            </div>
        </div>
            
        </section>
    )
}

export default AboutUs;