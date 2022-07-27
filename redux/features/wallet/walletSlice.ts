import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cluster } from '@solana/web3.js'
import { RootState } from '../../store/store'

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    cluster: 'devnet' as Cluster
  },
  reducers: {
    changeCluster: (state, action: PayloadAction<Cluster>) => {
      state.cluster = action.payload
    }
  }
})

export const selectCluster = (state: RootState) => state.wallet.cluster
export const { changeCluster } = walletSlice.actions

export default walletSlice.reducer
