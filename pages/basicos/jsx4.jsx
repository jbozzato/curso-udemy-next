export default function jsx4() {
    const subtitulo = "ESTOU NO JS HAHAHA"
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{Math.max(13, 39)}</h3>
            <h4>{3 * 3}</h4>
            <h5>{entre(800, 400, 972)}</h5>
        </div>
    )
}

function entre(valor, min, max) {
    if(valor > min && valor < max) {
        return "Sim!"
    } else {
        return "Não!"
    }
}