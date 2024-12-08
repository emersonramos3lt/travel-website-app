import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string; // Estilo definido a partir do "global.css" usando @apply
    full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => { // props: type, title, icon, variant
  return (
    <button
        className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
        type={type}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}

        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  ) // button = Container
    // label = Button text
}

// ${variant} é colocada dentro da className do button porque quando chamarmos em nossos outros componentes o Button, a variant irá add o estilo definido pelo @apply no CSS

export default Button