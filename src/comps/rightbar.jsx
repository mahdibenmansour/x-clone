import Card from "./card";
import Trends from "./trends";
import Nav from "./nav";
import Profiles from "./profiles";
import Search from "./search.jsx"
import { trends, profiles } from "./data";
export default function RighBar() {
  return (
    <div className=" pt-1 fixed flex overflow-y-auto h-screen right-0 w-[36%]">
      <div className=" max-w-[316px] space-y-3">
      <Search/>
        <Card
          title="Subscribe to Premium"
          desc="Subscribe to unlock new features and if eligible, receive a share of revenue."
          btn="Subscribe"
          sub={true}
        />
        <Card
          title="Trends for you"
          desc={trends.map(({ title, person, number }, index) => (
            <Trends title={title} person={person} number={number} key={index} />
          ))}
          btn="Show more"
        />
        
        
        <Card
          title="Who to follow"
          desc={profiles.map(({ verified, name, username, icon }) => (
            <Profiles
              icon={icon}
              name={name}
              username={username}
              verified={verified}
              key={1}
            />
          ))}
          btn="Show more"
        />
        <div>
          <Nav />
        </div>
      </div>
    </div>
  );
}
