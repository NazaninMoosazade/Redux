import React from "react";

import Users from "./Pages/Users/Users";
import Courses from "./Pages/Courses/Courses";
import Articles from "./Pages/Articles/Articles";

export default [
   { path: "/", element: <Users /> },
   { path: "/users", element: <Users /> },
   { path: "/courses", element: <Courses /> },
   { path: "/articles", element: <Articles /> },

 ];