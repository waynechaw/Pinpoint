import currentFilterTag from "../actions/action_filter_tag_name.js";
import { DISPLAY_HOTSPOTS } from '../constants/actionTypes';

export default function(state = 'Show All', action) {
  switch(action.type){
    case DISPLAY_HOTSPOTS:
      return action.payload;
    default:
    return state;
  }
}
