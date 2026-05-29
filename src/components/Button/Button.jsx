import classnames from "classnames"

export default function Button({children, variant, className, size, ...rest}) {
    let sizeClass = size ? `button-${size}` : ""
    let variantClass = variant ? `button-${variant}` : ""
    const allClasses = classnames(sizeClass, variantClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}