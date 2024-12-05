

const Toggle = () => {
    const switchTheme = (e) => {
    if(e.target.checked){
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    else{
        document.querySelector('body').setAttribute('data-theme', 'light')
    }
    }
    return (
        <div>
            <input type="checkbox" onChange={switchTheme} className="toggle"  />
        </div>
    );
};

export default Toggle;