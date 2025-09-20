import Sidebar from "@/components/sidebar/Sidebar";
import Terminal from "@/components/terminal/Terminal";

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <Terminal></Terminal>
    </div>
  );
}
