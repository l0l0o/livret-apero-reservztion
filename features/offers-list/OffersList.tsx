import { BarCard } from './components/BarCard';
import FilterList from './components/FilterList';
import { TabBar } from './components/TabBar';
import { MOCK_BARS } from './mock';

const OffersList = () => {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col gap-6">
      <FilterList />
      <TabBar />

      <div className="flex flex-col gap-4 overflow-y-auto">
        {MOCK_BARS.map((bar) => (
          <BarCard
            key={bar.id}
            title={bar.title}
            city={bar.city}
            hours={bar.hours}
            maxPeople={bar.maxPeople}
            imageSrc={bar.imageSrc}
            discount={bar.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersList;
