// CRIO_SOLUTION_START_MODULE_CREATE_PROFILE
// CRIO_SOLUTION_END_MODULE_CREATE_PROFILE
import React from "react";
import { Layout } from "components/common";
import { Intro, Contact, Projects,Skills,Education} from "components/landing";

export default () => (
  <Layout>
    
    <Intro />
    <Education />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
);
