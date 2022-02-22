import { combineReducers } from "redux";
import ChangeName from "./reducer";
import ChangeWork from "./workReducer";
import ChangeSkills from "./skillreducer";
import ChangeEducation from "./educationReducer";
import ChangeSummary from "./summaryReducer";
import ChangeFinal from "./finalReducer"
const rootReducer = combineReducers({
  ChangeName,
  ChangeWork,
  ChangeSkills,
  ChangeSummary,
  ChangeEducation,
  ChangeFinal,
});
export default rootReducer;
