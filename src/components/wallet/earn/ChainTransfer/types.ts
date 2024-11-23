import { ChainIdType } from '@/constants'
import { BN } from 'avalanche'

export enum TxState {
    failed = -1,
    waiting = 0,
    started = 1,
    success = 2,
}

export interface ChainSwapFormData {
    sourceChain: ChainIdType
    destinationChain: ChainIdType
    amount: BN
}
