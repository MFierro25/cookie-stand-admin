import InputForm from '../components/InputForm'
import Report from '/components/Report'
// import useResource from '../hooks/useResource';

export default function CookieStandAdmind() {
// const { resources, deleteResource } = useResource();
    const mockCookieStands = [{id:0, location:'Seattle'}]

    return (
        <>
        <InputForm />
        <Report cookieStands={mockCookieStands}/></>
    )
}