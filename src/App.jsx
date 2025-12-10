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
import SignUpPageComponent from "./signup-page/signup-page-component";
import FetchApiComponent from "./fetch-api-component/fetch-api-component";
import UseEffectComponent from "./use-effect-practice/use-effect-practice";
import UseEffectComponentTwo from "./use-effect-practice/use-effect-practice-two";
import UseEffectComponentThree from "./use-effect-practice/use-state-practice-three";
import FurnitureComponent from "./figma-component-one/furniture-component/furniture-component";
import OurFacilitiesComponent from "./figma-component-one/our-facilities-component/our-facilities-component";
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

      {/* <Routes>
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
      </Routes> */}
      <Routes>
        <Route path="*" element={<FourNotFourComponent />}></Route>
        <Route path="/" element = {<SignUpPageComponent/>}></Route>
        <Route path="/fetch-api" element = {<FetchApiComponent/>}></Route>
        <Route path="/use-effect-practice" element = {<UseEffectComponent/>}></Route>
        <Route path="/use-effect-practice-two" element = {<UseEffectComponentTwo/>}></Route>
        <Route path="/use-effect-practice-three" element = {<UseEffectComponentThree/>}></Route>
        <Route path="/furniture" element = {<FurnitureComponent/>}></Route>
        <Route path="/our-facilities" element={<OurFacilitiesComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
