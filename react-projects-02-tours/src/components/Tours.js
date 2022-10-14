import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="text-center mb-16">
        <h1 className="mb-2 capitalize font-bold">our tours</h1>
        <div className="w-24 h-1 mx-auto bg-clrPrimary5"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
