import "./dashboard.scss";
import Dashboard from "./dashboard";
import Footer from "./footer";
import Header from "./header";

const Tickets=()=>{
  return (
    <>
      <div className="dashboard-layout">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </>
  )   
}

export default Tickets;
