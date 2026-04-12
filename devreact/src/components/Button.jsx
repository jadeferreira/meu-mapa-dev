function Button(props){
    return (
        <button {...props} className="bg-slate-400 text-white p-2 rounded-md ">
            { props.children } {/* O que se passa pra dentro do componente, ou seja, o conteúdo do botão. */}
        </button>
    );
}

export default Button;