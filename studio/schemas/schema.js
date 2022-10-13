import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// import custom schemas
import interview from "./interviews";
import about from "./about";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([interview, about]),
});
