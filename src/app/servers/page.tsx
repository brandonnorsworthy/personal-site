import React from "react";
import withLayout from "../hocs/withLayout";
import MinecraftLabel from "./components/MinecraftLabel";
import ServerDetails from "./components/ServerDetails";

const fakeServerDetails = [
  {
    name: "Minecraft Server",
    description: "A Minecraft server with a lot of cool features.",
    players: `${Math.floor(Math.random() * 20)}/20`,
    status: "Online"
  },
  {
    name: "Brandons Valheim Server",
    description: "A Valheim server with a lot of cool features.",
    players: "0/8",
    status: "Online"
  },
  {
    name: "Epic Gamer ARK PVP Server",
    description: "A ARK server with a lot of cool features. PVP enabled. No rules. No admins. No mercy.",
    players: `${Math.floor(Math.random() * 16)}/16`,
    status: "Online"
  },
  {
    name: "Rust One Life Server",
    description: "SOLO/DUO/TRIO ONLY. ONE LIFE. PLUGINS: 2x Gather, 2x Smelt, 2x Craft, 2x Recycle, 2x Stack, 2x Scrap",
    players: `${Math.floor(Math.random() * 200)}/200`,
    status: "Online"
  },
  {
    name: "Starbound Server",
    description: "turned off due to inactivity",
    players: `${Math.floor(Math.random() * 16)}/16`,
    status: "Offline"
  },
  {
    name: "Tarkov Labs 24/7, Red Keycard Spawn, Respawns, No Raiders",
    description: "A Tarkov server with a lot of cool features.",
    players: `${Math.floor(Math.random() * 8)}/8`,
    status: "Online"
  },
  {
    name: "Rustopia 5x Server; SOLO/DUO/TRIO ONLY; 5x",
    description: "Rules: No Cheating, No Griefing, No Racism, No Spamming, No Hacking, No Exploiting, No Toxicity, No Advertising, No Ban Evasion, No Offensive Language, No Abusing Glitches, No Abusing Bugs, No Abusing Exploits, No Abusing Admins, No Abusing Donors, No Abusing VIPs, No Abusing Moderators, No Abusing Staff, No Abusing",
    players: `${Math.floor(Math.random() * 300)}/300`,
    status: "Online"
  },
];

interface PageProps {
  responsiveConstraintClasses: string;
}

const Page: React.FC<PageProps> = ({ responsiveConstraintClasses }) => {
  return (
    <main
      className='py-3 md:py-6 flex flex-col items-center w-full min-h-[calc(100vh-48px)] bg-cover bg-minecraft-dirt bg-32'
      style={{ imageRendering: "pixelated", }}>
      <section className={responsiveConstraintClasses}>
        {/* header */}
        <div className="flex items-end justify-center h-24">
          <MinecraftLabel text="Play Multiplayer" customClassNames="text-3xl drop-shadow-minecraftText" />
        </div>
      </section>

      <div className="w-full bg-cover bg-32 bg-minecraft-dirt">
        <div className="flex justify-center w-full overflow-y-scroll max-h-[75vh] shadow-inset-t-b bg-black/40">
          <section className={responsiveConstraintClasses}>
            {/* scrollable body */}
            <div className="flex flex-col justify-center w-full py-6">
              {
                fakeServerDetails.map((serverDetails, index) => (
                  <ServerDetails
                    key={index}
                    description={serverDetails.description}
                    name={serverDetails.name}
                    players={serverDetails.players}
                    status={serverDetails.status}
                    customClassNames={`${0 === index ? '' : 'mt-1'}`} />
                ))
              }
              {
                fakeServerDetails.map((serverDetails, index) => (
                  <ServerDetails
                    key={index}
                    description={serverDetails.description}
                    name={serverDetails.name}
                    players={serverDetails.players}
                    status={serverDetails.status}
                    customClassNames={`${0 === index ? '' : 'mt-1'}`} />
                ))
              }
            </div>
          </section>
        </div>
      </div>

      <section className={responsiveConstraintClasses}>
        {/* footer with buttons */}
        <div className="flex items-end justify-center h-24">
          <MinecraftLabel text="Play Multiplayer" customClassNames="text-3xl drop-shadow-minecraftText" />
        </div>
      </section>
    </main>
  )
};

export default withLayout(Page);