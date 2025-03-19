import { BrowserRouter, Route, Routes } from "react-router";
import { ScrollToTop } from "../components/common/ScrollToTop";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Dashboard/Home";
import UserProfiles from "../pages/UserProfiles";
import Blank from "../pages/Blank";
import Calendar from "../pages/Calendar";
import PermissionPage from "../pages/Permission";
import RolePage from "../pages/Role";
import FormElements from "../pages/Forms/FormElements";
import CreatePermission from "../pages/CreatePermission";
import CreateRole from "../pages/CreateRole";
import UpdatePermission from "../pages/UpdatePermission";
import UpdateRole from "../pages/UpdateRole";
import BasicTables from "../pages/Tables/BasicTables";
import UserPage from "../pages/User/UserPage";
import OrderPage from "../pages/Order/OrderPage";
import Alerts from "../pages/UiElements/Alerts";
import Avatars from "../pages/UiElements/Avatars";
import Badges from "../pages/UiElements/Badges";
import Buttons from "../pages/UiElements/Buttons";
import Images from "../pages/UiElements/Images";
import Videos from "../pages/UiElements/Videos";
import LineChart from "../pages/Charts/LineChart";
import BarChart from "../pages/Charts/BarChart";
import SignIn from "../pages/AuthPages/SignIn";
import SignUp from "../pages/AuthPages/SignUp";
import NotFound from "../pages/OtherPage/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Layout */}
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />

          {/* Others Page */}
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blank" element={<Blank />} />

          {/*Linh*/}
          <Route path="/permission" element={<PermissionPage />} />
          <Route path="/role" element={<RolePage />} />

          {/* Forms */}
          <Route path="/form-elements" element={<FormElements />} />
          <Route path="/create-permission" element={<CreatePermission />} />
          <Route path="/create-role" element={<CreateRole />} />
          <Route path="/update-permission" element={<UpdatePermission />} />
          <Route path="/update-role" element={<UpdateRole />} />

          {/* Tables */}
          <Route path="/basic-tables" element={<BasicTables />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/order-page" element={<OrderPage />} />

          {/* Ui Elements */}
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/badge" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />

          {/* Charts */}
          <Route path="/line-chart" element={<LineChart />} />
          <Route path="/bar-chart" element={<BarChart />} />
        </Route>

        {/* Auth Layout */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
