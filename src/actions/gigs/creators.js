import { createActions } from "redux-actions";
import * as ACTION_TYPE from "./types";

const actions = createActions(
  {},
  ACTION_TYPE.ADD_SKILL,
  ACTION_TYPE.LOAD_GIGS_SPECIAL_ERROR,
  ACTION_TYPE.LOAD_GIGS_SPECIAL_SUCCESS,
  ACTION_TYPE.LOAD_PAGE_SUCCESS,
  ACTION_TYPE.LOAD_PAGE_ERROR,
  ACTION_TYPE.LOAD_PAGE_PENDING,
  ACTION_TYPE.LOAD_SKILLS_ERROR,
  ACTION_TYPE.LOAD_SKILLS_SUCCESS,
  ACTION_TYPE.REMOVE_SKILL,
  ACTION_TYPE.RESET_FILTERS,
  ACTION_TYPE.SET_LOCATION,
  ACTION_TYPE.SET_PAGE_NUMBER,
  ACTION_TYPE.SET_PAGE_SIZE,
  ACTION_TYPE.SET_PAYMENT_MAX,
  ACTION_TYPE.SET_PAYMENT_MAX_VALUE,
  ACTION_TYPE.SET_PAYMENT_MIN,
  ACTION_TYPE.SET_PAYMENT_MIN_VALUE,
  ACTION_TYPE.SET_SKILLS,
  ACTION_TYPE.SET_SORTING,
  ACTION_TYPE.SET_TITLE,
  ACTION_TYPE.UPDATE_STATE_FROM_QUERY,
  { prefix: "GIGS", namespace: "--" }
);

export default actions;
