import React from "react";

import Users from "./Pages/Users/Users";
import Courses from "./Pages/Courses/Courses";

export default [
   { path: "/", element: <Users /> },
   { path: "/users", element: <Users /> },
   { path: "/courses", element: <Courses /> },
 ];