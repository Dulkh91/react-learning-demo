import useLanguage from "../Hook/useLang";
const ChangeLanguage = () => {
    const {lang, setLang } = useLanguage()
    return (<button onClick={()=>setLang(lang==='kh'? 'eng': 'kh')}>{lang}</button>);
}
 
export default ChangeLanguage;