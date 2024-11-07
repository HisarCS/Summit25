import "../styles/components/Workshop-Card.scss";

interface WorkshopCardProps {
  workshop: [String, unknown];
  location: String;
}
const WorkshopCard = ({ workshop, location }: WorkshopCardProps) => {
    type Workshop = {
        image: string;
        description: string;
    }
    const FormattedWorkshop = workshop[1] as unknown as Workshop;
    
    return (
      <div className="Workshop-card-wrapper">
        <div className="Workshop-Card">
            <div className="background-wrapper"></div>
            <img src={FormattedWorkshop.image} />
            <div className="inner">
              <div className="super-text">
                <h1>{location}</h1>
              </div>
              <div className="text-container">
                <h1>{workshop[0]}</h1>
                <p>{FormattedWorkshop.description}</p>
              </div>
            </div>
        </div>
      </div>
    );
};

export default WorkshopCard;
