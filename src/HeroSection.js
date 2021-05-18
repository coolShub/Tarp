import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    <img className="hero_back" src="https://alaskacf.org/wp-content/uploads/2018/07/iStock-463406923.jpg"/>
    <h1>Join us on our journey to help the disabled by ENABLING them.....</h1>
      <p>We are all human beings and thus should be treated similarly. Everyone should be respected equally and should be given equal opportunity. Society is not just a place where we live. It’s an environment we create for everyone. It’s not 
        the people with disabilities who retreat the society, it’s the mentality that is dragging behind.</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;


