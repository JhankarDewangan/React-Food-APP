import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import TopNavbar from "../../components/TopNavbar";
import styles from "../../css/plans.module.css";
import logoTagline from "../../images/LOGO_Tagline.png";
import infoStyles from "../../css/planinfo.module.css";
import pricing from "../../mealsData/pricing";

function PlanDays() {
  let navigate = useNavigate();
  let { planType, day } = useParams();
  console.log(planType, day);
  let daywisePricing = pricing[planType];
  let mealType = ["Breakfast", "lunch", "Dinner"];

  return (
    <>
      <TopNavbar className="bg-sky-700 text-lg" />
      <div className={infoStyles.body}>
        <div className={infoStyles.cardDays}>
          <div className={infoStyles.dayBar}>
            <h3>{day.toUpperCase()}</h3>
          </div>

          {mealType.map((meal) => {
            return (
              <div
                onClick={() => {
                  navigate(`/plans/${planType}/${day}/${meal.toLowerCase()}`);
                }}
                type="button"
                className={infoStyles.mealTypeBar}
              >
                <h3>{meal}</h3>
              </div>
            );
          })}
        </div>
        <div className={infoStyles.details}>
          <div className={infoStyles.pricing}>
            <div>
              <p>7 day Plan:</p>
              <p>{daywisePricing[7]}</p>
            </div>
            <div>
              <p>14 day Plan:</p>
              <p>{daywisePricing[14]}</p>
            </div>
            <div>
              <p>28 day Plan:</p>
              <p>{daywisePricing[28]}</p>
            </div>
            <div>
              <p>custom:</p>
              <p>{daywisePricing.custom}</p>
            </div>
          </div>
          {/* <div type="button" className={infoStyles.addAddr}>
            <h3>Add Address</h3>
          </div> */}
          <div
            type="button"
            onClick={() => {
              navigate(`/plans/${planType}/checkout`);
            }}
            className={infoStyles.checkout}
          >
            <h3>Proceed to Checkout</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlanDays;
