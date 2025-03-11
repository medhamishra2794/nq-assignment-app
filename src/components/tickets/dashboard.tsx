import { FiPlus } from "react-icons/fi";
import { IoSearch, IoTicket } from "react-icons/io5";
import Sidebar from "./sidebar";

const Dashboard=()=>{
  return (
    <div className="dashboard-body-wrap">
      {/* Sidebar */}
      <Sidebar />
      <div className="dashboard-body">
        <div className="flex items-center justify-between">
          <div className="text-sm">Tickets</div>
          <div className="flex items-center gap-4">
            <div className="text-sm">Service Status - </div>
            <div className="status-btn active">Active</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
          <button className="primary-btn text-white text-xs font-bold py-3 pl-3 pr-8 rounded flex items-center w-full sm:w-auto"><FiPlus className="text-xl mr-1" /> Create ticket</button>
          <div className="relative mt-3 w-full sm:w-auto">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearch />
            </div>
            <input type="text" id="search-navbar" className="search-input shadow-md block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 outline-none rounded-3xl bg-gray-50" placeholder="Search" />
          </div>
        </div>
        
        <div className="grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 sm:mt-15">
          <div className="ticket-status-col">
            <div id="accordion-collapse" data-accordion="open">
              <h2 id="accordion-collapse-heading-1 mx-5">
                <button type="button" className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 bg-white rounded-md gap-3 shadow-md" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                  <span>Open 3</span>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" className="mt-5 bg-white rounded-md" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-3">
                  <div className="card-ticket">
                    <div className="card-head">
                      <div className="ticket-icon"><IoTicket /></div>
                      <div className="ticket-title">#420079 Test P2 SR - Platinum</div>
                    </div>
                      <div className="ticket-detail">Type - Incident</div>
                      <div className="ticket-detail">Registration date - <br /> 05/03-2025 06:00 PM</div>
                      <div className="ticket-detail">Resolve by - <br /> 10/03-2025 04:00 PM</div>
                      <div className="priority-status high">Priority - High</div>
                  </div>
                  <div className="card-ticket">
                    <div className="card-head">
                      <div className="ticket-icon"><IoTicket /></div>
                      <div className="ticket-title">#420079 Test P2 SR - Platinum</div>
                    </div>
                      <div className="ticket-detail">Type - Incident</div>
                      <div className="ticket-detail">Registration date - <br /> 05/03-2025 06:00 PM</div>
                      <div className="ticket-detail">Resolve by - <br /> 10/03-2025 04:00 PM</div>
                      <div className="priority-status low">Priority - Low</div>
                  </div>
                  <div className="card-ticket">
                    <div className="card-head">
                      <div className="ticket-icon"><IoTicket /></div>
                      <div className="ticket-title">#420079 Test P2 SR - Platinum</div>
                    </div>
                      <div className="ticket-detail">Type - Incident</div>
                      <div className="ticket-detail">Registration date - <br /> 05/03-2025 06:00 PM</div>
                      <div className="ticket-detail">Resolve by - <br /> 10/03-2025 04:00 PM</div>
                      <div className="priority-status high">Priority - High</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticket-status-col">
            <div id="accordion-collapse" data-accordion="open">
              <h2 id="accordion-collapse-heading-2 mx-5">
                <button type="button" className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 bg-white rounded-md gap-3 shadow-md" data-accordion-target="#accordion-collapse-body-2" aria-expanded="true" aria-controls="accordion-collapse-body-2">
                  <span>Pending 1</span>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-2" className="mt-5 bg-white rounded-md" aria-labelledby="accordion-collapse-heading-2">
                <div className="p-3">
                  <div className="card-ticket">
                    <div className="card-head">
                      <div className="ticket-icon"><IoTicket /></div>
                      <div className="ticket-title">#420079 Test P2 SR - Platinum</div>
                    </div>
                      <div className="ticket-detail">Type - Incident</div>
                      <div className="ticket-detail">Registration date - <br /> 05/03-2025 06:00 PM</div>
                      <div className="ticket-detail">Resolve by - <br /> 10/03-2025 04:00 PM</div>
                      <div className="priority-status critical">Priority - Critical</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticket-status-col">
          <div id="accordion-collapse" data-accordion="open">
              <h2 id="accordion-collapse-heading-3 mx-5">
                <button type="button" className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 bg-white rounded-md gap-3 shadow-md" data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="accordion-collapse-body-3">
                  <span>Closed 2</span>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-3" className="mt-5 bg-white rounded-md" aria-labelledby="accordion-collapse-heading-3">
                <div className="p-3">
                  <div className="card-ticket">
                    <div className="card-head">
                      <div className="ticket-icon"><IoTicket /></div>
                      <div className="ticket-title">#420079 Test P2 SR - Platinum</div>
                    </div>
                      <div className="ticket-detail">Type - Incident</div>
                      <div className="ticket-detail">Registration date - <br /> 05/03-2025 06:00 PM</div>
                      <div className="ticket-detail">Resolve by - <br /> 10/03-2025 04:00 PM</div>
                      <div className="priority-status medium">Priority - Medium</div>
                  </div>
                  <div className="card-ticket">
                    <div className="card-head">
                      <div className="ticket-icon"><IoTicket /></div>
                      <div className="ticket-title">#420079 Test P2 SR - Platinum</div>
                    </div>
                      <div className="ticket-detail">Type - Incident</div>
                      <div className="ticket-detail">Registration date - <br /> 05/03-2025 06:00 PM</div>
                      <div className="ticket-detail">Resolve by - <br /> 10/03-2025 04:00 PM</div>
                      <div className="priority-status low">Priority - Low</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;
