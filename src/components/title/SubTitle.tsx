import './SubtitleStyle.scss'

export default function SubTitle({ text }: { text: string | undefined }) {
    return <h2 className="subtitle">{ text }</h2>
}