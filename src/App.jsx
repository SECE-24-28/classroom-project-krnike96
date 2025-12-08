import "./App.css";
import CourseComponent from "./course-component/course-component";
import HelloWorldComponent from "./hello-world/hello-world-component";
import UserTable from "./hello-world/table";
import ImpactAtAGlanceComponent from "./impact-at-a-glance/impact-component";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import OurPromiseComponent from "./our-promise-component/our-promise-component";
import PositioningComponent from "./positioning/positioning-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import VisionComponent from "./vision-component/vision-component";
import { Route, Routes } from "react-router-dom";
import FourNotFourComponent from "./404-component/four-not-four-component";
import RouterComponent from "./router-component/router-component";
import UseStateFormComponent from "./use-state-form/use-state-form-component";
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
      {/* <VisionComponent/> */}
      {/* <LeadersTomorrowComponent/>  */}
      {/* <PositioningComponent/> */}
      {/* <TrustedbyComponent/> */}
      {/* <ImpactAtAGlanceComponent/> */}
      {/* <OurPromiseComponent /> */}
      {/* <CourseComponent /> */}

      <Routes>
        <Route path="/" element={<RouterComponent />}></Route>
        <Route path="/trusted-by/:id" element={<TrustedbyComponent />}></Route>
        <Route
          path="/ImpactAtAGlanceComponent"
          element={<ImpactAtAGlanceComponent />}
        ></Route>
        <Route
          path="/OurPromiseComponent"
          element={<OurPromiseComponent />}
        ></Route>
        <Route
          path="/use-state-form"
          element={<UseStateFormComponent />}
        ></Route>
        <Route path="*" element={<FourNotFourComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
