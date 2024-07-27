import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { chatService } from "../../api-service/chat/chat-action";

const initialState = {
  allChatRooms: [],
  chats: [],
  isLoading: false,
};

export const getAllChatRoom = createAsyncThunk(
  "get_all_room",
  async (thunkAPI) => {
    try {
      return await chatService.getAllRoom();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createChatRooom = createAsyncThunk(
  "create_chat_room",
  async ({ roomID }, thunkAPI) => {
    try {
      return await chatService.createChatRoom(roomID);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleRoomMessages = createAsyncThunk(
  "get_single_room_message",
  async (id, thunkAPI) => {
    try {
      return await chatService.getChatRoomMessage(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllChatRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllChatRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allChatRooms = action?.payload;
      })
      .addCase(getAllChatRoom.rejected, (state) => {
        state.isLoading = false;
      })

      // -----------------Single Chat room message----------------

      .addCase(getSingleRoomMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleRoomMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.chats = action.payload;
      })
      .addCase(getSingleRoomMessages.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const chatReducer = chatSlice.reducer;

export default chatReducer;
