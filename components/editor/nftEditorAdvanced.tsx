import {Nft} from "@metaplex-foundation/js";
import dynamic from "next/dynamic";

type NftEditorAdvancedProps = {
    nft: Nft;
};

const Ace = dynamic(
    async () => {
        const ace = await import('react-ace');
        require('ace-builds/src-noconflict/mode-json');
        require("ace-builds/src-noconflict/snippets/json");
        require('ace-builds/src-noconflict/theme-monokai');
        return ace;
    },
    {
        loading: () => (
            <p className="h-24 bg-back rounded-3xl p-2">Loading...</p>
        ),
        ssr: false,
    })

const NftEditorAdvanced = ({nft}: NftEditorAdvancedProps) => {
    const nftString = JSON.stringify(nft, null, '\t')
    let lastUpdate = nftString

    const onLoad = () => {
        console.log('just loaded')
    }

    const onUpdate = () => {
        console.log(lastUpdate)
    }

    const onChange = (e: any) => {
        lastUpdate = e
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="gradient-border-wrap p-0.5 rounded-3xl">
            <Ace
                mode="json"
                theme="monokai"
                name="advanced-editor"
                onLoad={onLoad}
                onChange={onChange}
                fontSize={16}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={nftString}
                setOptions={{
                    showLineNumbers: true,
                    tabSize: 2,
                    useWorker: false,
                }}/>
            </div>

            <div className="w-full flex items-center justify-center">
                <button onClick={onUpdate} className="button-violet-glow bg-violet rounded-full font-montserrat px-5 py-2 text-white w-52">Update</button>
            </div>
        </div>

    )
};

export default NftEditorAdvanced;
