import LoginPanel from "../components/LoginPanel";

function LoginPageLayout({Content}) {
    return (
        <>
            <div style={{ display: 'flex', height: '100%' }}>
                <LoginPanel />
                <div style={{ flex: 1, paddingLeft: '200px', paddingTop: '100px' }}>
                    {Content}
                </div>
            </div>
        </>
    );
}

export default LoginPageLayout;