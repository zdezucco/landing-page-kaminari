import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
}

const botaoRedirecionarPagina = () => {
    window.location.href = "https://www.instagram.com/civic.kaminari/";
}

export default function Button({ text, secondary }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"} onClick={botaoRedirecionarPagina} >
            {text}
        </button>
    )
}