import ClusterPickerItem from "./clusterPickerItem";

const ClusterPickerMobile = () => {
    return (<div className="flex flex-row justify-between items-center gap-2">
        <ClusterPickerItem
            text="Devnet"
            value="devnet"
            className="btn btn-ghost flex-1"
        />
        <ClusterPickerItem
            text="Mainnet"
            value="mainnet-beta"
            className="btn btn-ghost flex-1"
        />
    </div>)
}

export default ClusterPickerMobile