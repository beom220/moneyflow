
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {useNavigate} from "react-router-dom";

export default function GoogleLoginForm(){
    const navigate = useNavigate();
    const clientId:string|any = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const onSuccess = (response:any) => {
        console.log(response);
        navigate("/");
    }
    const onFailed = (error: any) => {
        console.log(error);
    }

    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={() => {console.log('login failed')}}
            />
            </GoogleOAuthProvider>
        </>
    )
}