import allFeedsSlice, { allFeedsActions } from "./all-feeds-slice";
import selectedFeedSlice, { selectedFeedActions } from "./selected-feed-slice";
import subscribtionsSlice, { subscribtionsActions, subscribtionsSelectors } from "./subscribtions-slice";
import selectedUserSlice, { selectedUserActions } from "./user-slice";

export { selectedFeedActions, selectedFeedSlice };

export { allFeedsActions, allFeedsSlice };

export { selectedUserActions, selectedUserSlice };

export { subscribtionsActions, subscribtionsSlice, subscribtionsSelectors };
