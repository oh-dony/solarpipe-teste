// Components
import { About } from "@/app/components/About";
import { Team } from "@/app/components/Team";

export const metadata = {
  title: "Sobre",
};

export default function Sobre() {
  return (
    <div className="sobre">
      <About />
      <Team />
    </div>
  );
}
