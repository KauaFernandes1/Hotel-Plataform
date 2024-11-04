import {ReactNode} from 'react'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
    <>
        <header className="w-full flex justify-center py-5 borde">logo vinma</header>
        <main>{children}</main>
        <footer>footer</footer>
    </>
    )
}


export default Layout;