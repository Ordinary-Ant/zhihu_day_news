import { cloneDeep } from "lodash-es";

const initial = {
  data_list: null,
};

function commonReducer(state = initial, action) {
  state = cloneDeep(state);
  switch (action?.type) {
  }
  return state;
}

export default commonReducer;
