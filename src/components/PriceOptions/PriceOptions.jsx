import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
       const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 60,
          "features": [
            "Access to cardio equipment",
            "Unlimited access during off-peak hours",
            "Locker room access",
            "Fitness assessment upon signup",
            "Discounts on gym merchandise"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 30,
          "features": [
            "Access to all gym equipment",
            "Unlimited 24/7 access",
            "Access to group fitness classes",
            "Locker and towel service",
            "Personalized workout plans",
            "Monthly fitness challenges",
            "Discounts on personal training sessions"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 80,
          "features": [
            "Access to all gym equipment",
            "Unlimited 24/7 access",
            "Access to group fitness classes",
            "Personal trainer sessions (2 per month)",
            "Sauna and steam room access",
            "Nutritional consultation",
            "Complimentary protein shakes",
            "Exclusive access to VIP events"
          ]
        }
      ]
      
    return (
        <div className="mt-12">
            <h3 className="text-5xl">Best prices in the town</h3>
           <div className="grid md:grid-cols-3 gap-6">
           {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;