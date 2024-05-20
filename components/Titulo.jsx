import { Prosto_One } from "next/font/google"

export default function Titulo(props) {
    console.log(props)
    return (
        <>
        <p>{props.principal}</p>
        <p>{props.secundario}</p>
        </>
    )
}