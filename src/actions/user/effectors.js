import { getAuthUserProfile } from "@topcoder/micro-frontends-navbar-app";
import actions from "./creators";
import * as selectors from "reducers/user/selectors";
import { fetchReferralData } from "services/referral";
import { delay } from "utils/misc";

/**
 * Loads user's referral data.
 *
 * @param {Object} store redux store object
 * @param {boolean} [forceReload] force data reload even if it is already present
 * @returns {Promise}
 */
export const loadReferralData = async (
  { dispatch, getState },
  forceReload = false
) => {
  const state = getState();
  const referralData = selectors.getReferralData(state);
  if (referralData && !forceReload) {
    return;
  }
  const profile = selectors.getProfile(state);
  if (!profile) {
    console.error(
      "No profile data provided when trying to fetch referral data."
    );
    return;
  }
  let data = null;
  try {
    data = await fetchReferralData(profile);
  } catch (error) {
    dispatch(actions.loadReferralDataError(error.toString()));
    return;
  }
  dispatch(actions.loadReferralDataSuccess(data));
};

/**
 * Tries to load user's profile.
 *
 * @param {Object} store redux store object
 * @param {boolean} [forceReload] force data reload even if it is already present
 * @returns {Promise}
 */
export const loadProfile = async (
  { dispatch, getState },
  forceReload = false
) => {
  let profile = selectors.getProfile(getState());
  if (profile && !forceReload) {
    return;
  }
  let error = null;
  dispatch(actions.loadProfilePending());
  for (let i = 0; i < 3; i++) {
    try {
      profile = await getAuthUserProfile();
    } catch (err) {
      error = err;
    }
    if (profile) {
      break;
    }
    await delay(1000);
  }
  if (error) {
    dispatch(actions.loadProfileError(error.toString()));
  } else {
    dispatch(actions.loadProfileSuccess(profile));
  }
};
