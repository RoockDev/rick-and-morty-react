interface Props {
    disabled:boolean;
    onClick: () => void;
}

export const LoadMoreButton = ({disabled, onClick}: Props) => {
    return (
        <button
        onClick={onClick}
        disabled={disabled}
        >
            Cargar más
        </button>
    );
};