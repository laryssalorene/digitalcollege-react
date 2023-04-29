
function Button(props, children, disabled){

    
    const classes = `btn ${props.tipo || "default"} ${props.disabled || 'false'}`;

    return <button className={classes}>{props.children}</button>
}

export default Button;