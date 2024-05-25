import './SubtitleStyle.scss'

export default function SubTitle({ text }: { text: string }) {
    return <h2 className="subtitle">{ text }</h2>
}