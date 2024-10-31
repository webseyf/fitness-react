import './plans.css';
import { plansData } from '../../data/plansData.js';
import whiteTick from '../../assets/whiteTick.png'; // Ensure this path is correct

const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
      <div className="programs-header">
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>

      {/* Cards */}
      <div className='plans'>
        {plansData.map((plan, index) => (
          <div className='plan' key={index}>
            {plan.icon} <br /><br />
            <span className="plan-name">{plan.name}</span><br /><br />
            <span className="plan-price">{plan.price} Birr</span>
            <div className="features">
              {plan.features.map((feature, idx) => (
                <div className="feature" key={idx}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div> <br />
            <span className="more-benefits">See more benefits =></span><br />
            <button className="join-now">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
