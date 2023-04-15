export default function NavHeader(props) {
    const { location, navigate } = props

    const title = '首页'
    const back = () => {
        navigate(-1)
    }
    return <NavBar onBack={back}>{ title }</NavBar>
}