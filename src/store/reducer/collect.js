import { cloneDeep } from "lodash-es";

const initial = {
  collect: null,
};

function collectReducer(state = initial, action) {
  state = cloneDeep(state);
  switch (action?.type) {
  }
  return state;
}

export default collectReducer;
