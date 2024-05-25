import './SubtitleStyle.scss'

export default function Subtitle({ text }: { text: string }) {
    return <h2 className="subtitle">{ text }</h2>
}