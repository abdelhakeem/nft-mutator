import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {changeCluster, selectCluster} from "../../redux/features/wallet/walletSlice";
import {Cluster} from "@solana/web3.js";

const ClusterPickerWeb = () => {
    const cluster = useAppSelector(selectCluster)
    const dispatch = useAppDispatch()

    return (
        <select
            className="select border border-emerald rounded-full invisible md:visible"
            value={cluster}
            onChange={(e) => dispatch(changeCluster(e.target.value as Cluster))}
        >
            <option value="devnet">Devnet</option>
            <option value="mainnet-beta">Mainnet</option>
        </select>
    )
}

export default ClusterPickerWeb