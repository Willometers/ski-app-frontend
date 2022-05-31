import { createSlice } from "@reduxjs/toolkit"
import { fetchWeather } from "./FetchWeather";
import { fetchFiveDay } from "./FetchFiveDay";
// import zipcode for search query from search form or from current location thingy

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        entities: [],
        zipcode: ["13066"], 
        status: "idle", 
      },

    reducers: {
        zipcodeAdded(state, action) {
          state.zipcode = action.payload;
        },

        fetchFiveDay(state, action) {
            state.zipcode = action.payload
        }
      },

    extraReducers: {
        // handle async action types
        [fetchWeather.pending](state) {
          state.status = "loading";
        },
        [fetchWeather.fulfilled](state, action) {
          state.entities = action.payload;
          state.status = "idle";
        },
        // [fetchFiveDay.pending](state) {
        //     state.status = "loading";
        //   },
        // [fetchFiveDay.fulfilled](state, action) {
        //     state.entities = action.payload;
        //     state.status = "idle";
        // },
    },
})

// export actions
export const { zipcodeAdded  } = weatherSlice.actions;

export default weatherSlice.reducer;