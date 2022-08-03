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

    const onLoad = () => {
        console.log('just loaded')
    }

    const onChange = (e: any) => {
        console.log('updated nft', e)
    }

    return (
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
    )
};

export default NftEditorAdvanced;
