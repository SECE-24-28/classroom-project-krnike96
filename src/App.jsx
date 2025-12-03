import "./App.css";
import HelloWorldComponent from "./hello-world/hello-world-component";
import UserTable from "./hello-world/table";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import PositioningComponent from "./positioning/positioning-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import VisionComponent from "./vision-component/vision-component";
// import styled from "styled-components";

// const Container = styled.div`
//   padding: 2rem;
//   background: #242424;
//   min-height: 100vh;
// `;

function App() {
  return (
    // <Container>
    //   <HelloWorldComponent />
    //   <UserTable />
    // </Container>
    // <HelloWorldComponent />
    <div>
      {/* <VisionComponent/>
      <LeadersTomorrowComponent/> */}
      {/* <PositioningComponent/> */}
      <TrustedbyComponent/>
    </div>
  );
}

export default App;
