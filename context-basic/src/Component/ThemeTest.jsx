import useTheme from "../Hook/useTheme";
const ThemeTest = () => {
    const {theme, setTheme} = useTheme()
    return ( <>
        <h1>{theme}</h1>
        <button onClick={()=>setTheme("light")}>ChangeTheme</button>

    </> );
}
 
export default ThemeTest;