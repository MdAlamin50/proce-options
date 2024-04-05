import PriceOptions from "../PriceOptions/PriceOptions";

const PriceOption = () => {
  const priceOption = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30,
      features: [
        "Access to cardio equipment",
        "Access to weight training area",
        "Locker room access",
        "Limited group fitness classes",
        "Online workout tracker",
        "Nutritional guidance",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 50,
      features: [
        "Full access to all gym facilities",
        "Unlimited group fitness classes",
        "Access to sauna and steam room",
        "Discounts on personal training sessions",
        "Dedicated personal locker",
        "Monthly fitness assessment",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 80,
      features: [
        "All features of Standard Membership",
        "Personalized workout plan",
        "Access to exclusive members-only events",
        "Priority booking for classes and amenities",
        "Free guest passes",
        "Complimentary towel service",
        "Access to premium fitness equipment",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h1 className="text-5xl">Best price in the town</h1>
      <div className="grid grid-cols-3 gap-6">
        {
        priceOption.map((option) => (
          <PriceOptions key={option.id} option={option}></PriceOptions>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
