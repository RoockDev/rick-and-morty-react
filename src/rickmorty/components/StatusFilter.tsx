interface Props {
    value:string;
    onChange: (value:string) => void;
}

export const StatusFilter = ({value,onChange}: Props ) => {
    return (
        <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        >
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>

        </select>
    );
};