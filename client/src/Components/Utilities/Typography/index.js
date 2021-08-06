
export const SectionTitle = ({id, text, className}) => {
    return (
        <h2 id={id} className={`mt-utility mt-section-title ${className}`}>{text}</h2>
    )
}
export const ComponentTitle = ({id, text, className}) => {
    return (
        <h3 id={id} className={`mt-utility mt-component-title ${className}`}>{text}</h3>
    )
}
export const ElementTitle = ({id, text, className}) => {
    return (
        <h5 id={id} className={`mt-utility mt-element-title ${className}`}>{text}</h5>
    )
}

