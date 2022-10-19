import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import pageInfo from "./pageInfo";
import skills from "./skills";
import experience from "./experience";
import project from "./project";
import social from "./social";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pageInfo, skills, experience, project, social]),
});
